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
    .catch((err) => console.log(err));
}

export function getImageByPhotoReference(photoReference) {
  return axios
    .get(
      `/place/photo?maxwidth=400&photoreference=${photoReference}&key=${Config.GOOGLE_API_KEY}`
    )
    .then((res) => res.request.responseURL)
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
    });
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
        const distance = await getDistanceBetweenPlaces(
          currentLocation,
          location
        );
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

export function findNearbyPlacesByText(location, text) {
  return axios
    .get(
      `/place/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=50000&type=establishment&keyword=${text}&key=${Config.GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res && res.data && res.data.results) {
        const { results } = res.data;
        return results.map((place) => {
          return {
            id: place.place_id,
            name: place.name,
            location: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            },
          };
        });
      }
      return null;
    })
    .catch((err) => console.log(err));
}
