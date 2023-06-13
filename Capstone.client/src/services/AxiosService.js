import Axios from "axios";
import { baseURL } from "../env";

export const api = Axios.create({
  baseURL,
  timeout: 8000,
});

export const twitchAuth = Axios.create({
  baseURL: "https://id.twitch.tv/oauth2/token",
  headers: { 
    client_ID: "0ersnxqxjdpp7w6ntqt4205zwwqe5w",
    client_secret: 'bdwxnfw6fsaef4531t1ormipyrj8lw',
    grant_type: 'client-credentials'
  },

});

export const gameDb = Axios.create({
  baseURL: "https://api.igdb.com/v4",
  headers: { 
    client_ID: "0ersnxqxjdpp7w6ntqt4205zwwqe5w",
    Authorization: 'Bearer 3m8ok67y3z3seyvrw6rh79zldus9tr',
    
  }

});


api.interceptors.request.use((config) => config, handleAxiosError);
api.interceptors.response.use((response) => response, handleAxiosError);

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn("[📡 AXIOS_ERROR_RESPONSE_DATA]", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn("[📡 AXIOS_ERROR_NO_RESPONSE]", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn("[📡 AXIOS_ERROR_INVALID_REQUEST]", error.message);
  }
  return Promise.reject(error);
}
