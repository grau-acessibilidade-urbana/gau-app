import axios from "axios";

const API_KEY = 'AIzaSyB3ac2_oX6qgsKNLsp3W6e5IZ82-jLeb9s';
axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api/place'


export function getPlacesPredictions(query, currentLocation) {
    return axios.get(`/autocomplete/json?input=${query}&types=establishment&components=country:br&key=${API_KEY}`)
        .then(res => {
            if (res && res.data && res.data.predictions) {
               return res.data.predictions.map(prediction => {
                    return {
                        id: prediction.place_id,
                        description: prediction.structured_formatting.main_text,
                    }
                });
            }
        })
        .catch(err => console.log(err));
}

export function getPlaceDetailsById(id) {
    return axios.get(`/details/json?place_id=${id}&key=${API_KEY}`)
        .then(res => {
            if (res && res.data && res.data.result) {
                const result = res.data.result;
                return {
                    id: result.place_id,
                    name: result.name,
                    address: result.formatted_address,
                    phoneNumber: result.formatted_phone_number,
                    location: {
                        latitude: result.geometry.location.lat,
                        longitude: result.geometry.location.lng
                    },
                    photos: result.photos.map(photo => photo.photo_reference),
                    website: result.website
                };
            }
        })
        .catch(err => console.log(err));
}

export function findNearbyPlacesByText(location, text) {
    return axios.get(`/nearbysearch/json?location=${location.latitude},${location.longitude}&radius=50000&type=establishment&keyword=${text}&key=${API_KEY}`)
        .then(res => {
            if (res && res.data && res.data.results) {
                const results = res.data.results;
                return results.map(place => {
                    return {
                        id: place.place_id,
                        name: place.name,
                        location: {
                            latitude: place.geometry.lat,
                            longitude: place.geometry.lng
                        }
                    }
                })
            }
        })
        .catch(err => console.log(err));
}