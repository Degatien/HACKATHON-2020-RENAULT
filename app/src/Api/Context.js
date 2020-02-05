import axios from 'axios';

const baseUrl = "http://team14.xp65.renault-digital.com/api/context"

export function getMeteo() {
  return axios.get(baseUrl + "/api/context/weather/current")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Context meteo");
    })
}

export function getAirQuality() {
  return axios.get(baseUrl + "/api/context/air/current")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Context meteo");
    })
}