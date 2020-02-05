import axios from 'axios';

const baseUrl = "http://team14.xp65.renault-digital.com/api/agent";

export function getSituation() {
  return axios.get(baseUrl + "/api/user/situation/last")
    .then(data => {
      return data && data.data ? data.data : null;
    })
    .catch(error => {
      throw new Error("Agent situation");
    })
}