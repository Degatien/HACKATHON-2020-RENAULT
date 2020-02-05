import axios from 'axios';

const baseUrl = "http://team14.xp65.renault-digital.com/api/vehicle"

export function getVehicles() {
  return axios.get(baseUrl + "/api/v1/vehicles")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Vehicles");
    })
}

export function getVehicle(id) {
  return axios.get(baseUrl + `/api/v1/vehicles/${id}`)
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Vehicle");
    })
}