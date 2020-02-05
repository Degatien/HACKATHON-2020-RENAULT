import axios from 'axios';

const baseUrl = "http://team14.xp65.renault-digital.com/api/graph";

export function postBike(object) {
  return axios.post(baseUrl + "/road_graph/shortest_path/bike", object)
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Bike path");
    })
}

export function postSubway(object) {
  return axios.post(baseUrl + "/road_graph/shortest_path/subway", object)
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Subway path");
    })
}

export function postWalk(object) {
  return axios.post(baseUrl + "/road_graph/shortest_path/walk", object)
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Walk path");
    })
}

export function postCar(object) {
  return axios.post(baseUrl + "/road_graph/shortest_path/car", object) // Careful, object here is different
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Car path");
    })
}

export function getStations() {
  return axios.get(baseUrl + "/subway/stations")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Subway stations");
    })
}

export function getRoadTraffic() {
  return axios.get(baseUrl + "/road_graph/traffic_conditions")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Road traffic");
    })
}

export function getRoadStatusCar() {
  return axios.get(baseUrl + "/road_graph/roads_status/car")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Road status car");
    })
}

export function getRoadStatusBike() {
  return axios.get(baseUrl + "/road_graph/roads_status/bike")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Road status bike");
    })
}

export function getRoadStatusWalk() {
  return axios.get(baseUrl + "/road_graph/roads_status/walk")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Road status walk");
    })
}

export function getLineState() {
  return axios.get(baseUrl + "/road_graph/line_state")
    .then(data => {
      return data && (data.data || null);
    })
    .catch(error => {
      throw new Error("Line state");
    })
}

