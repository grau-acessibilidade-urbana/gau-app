import axios from 'axios';
import Config from '../../config';

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api';

export function getPlacesPredictions(query) {
  return axios
    .get(
      `/place/autocomplete/json?input=${query}&types=establishment&components=country:br&key=${Config.GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res && res.data && res.data.predictions) {
        return res.data.predictions.map((prediction) => {
          return {
            id: prediction.place_id,
            description: prediction.structured_formatting.main_text,
          };
        });
      }
      return null;
    })
    .catch((err) => console.error(err));
}

export function getImageByPhotoReference(photoReference) {
  return axios
    .get(
      `/place/photo?maxwidth=400&photoreference=${photoReference}&key=${Config.GOOGLE_API_KEY}`
    )
    .then((res) => {
      return res.request.responseURL;
    })
    .catch((err) => console.log(err));
}

export function getDistanceBetweenPlaces(origin, destination) {
  return axios
    .get(
      `/distancematrix/json?origins=${origin.latitude},${origin.longitude}&destinations=${destination.latitude},${destination.longitude}&key=${Config.GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res && res.data && res.data.rows && res.data.rows.length > 0) {
        const distance = res.data.rows
          .flatMap((row) => row.elements)
          .map((element) => element.distance.text);
        return distance.length > 0
          ? distance[0]
          : 'Não foi possível calcular a distância';
      }
      return null;
    })
    .catch((err) => console.error(err));
}

export function getPlaceDetailsById(currentLocation, id) {
  return axios
    .get(`/place/details/json?place_id=${id}&key=${Config.GOOGLE_API_KEY}`)
    .then(async (res) => {
      if (res && res.data && res.data.result) {
        const { result } = res.data;
        const photoReference = result.photos
          ? result.photos[0].photo_reference
          : null;
        const imageUri = await getImageByPhotoReference(photoReference);
        const location = {
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
        };

        const distance = currentLocation
          ? await getDistanceBetweenPlaces(currentLocation, location)
          : 0;

        return {
          id: result.place_id,
          name: result.name,
          address: result.formatted_address,
          phoneNumber: result.formatted_phone_number,
          location,
          distance,
          image: imageUri,
          website: result.website,
        };
      }

      return null;
    })
    .catch((err) => console.log(err));
}

export function findNearbyPlacesByText(
  currentLocation,
  text,
  showDetails = false
) {
  return axios
    .get(
      `/place/nearbysearch/json?location=${currentLocation.latitude},
      ${currentLocation.longitude}&radius=5000&type=establishment${
        text ? `&keyword=${text}` : ``
      }
      &key=${Config.GOOGLE_API_KEY}`
    )
    .then(async (res) => {
      if (res && res.data && res.data.results) {
        const { results } = res.data;
        const placesPromises = results.map(async (place) => {
          let distance = '';
          let image = '';
          if (showDetails) {
            const photoReference = place.photos
              ? place.photos[0].photo_reference
              : null;
            image = await getImageByPhotoReference(photoReference);
            const location = {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            };

            distance = currentLocation
              ? await getDistanceBetweenPlaces(currentLocation, location)
              : 0;
          }

          return {
            id: place.place_id,
            name: place.name,
            image,
            distance,
            location: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            },
          };
        });

        return Promise.all(placesPromises);
      }
      return null;
    })
    .catch((err) => console.error(err));
}
