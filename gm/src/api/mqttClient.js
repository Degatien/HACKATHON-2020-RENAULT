import * as mqtt from "mqtt";
const TEAM = "team14";

class MqttClient {
  constructor() {
    this.client = mqtt.connect(
      "wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443/",
      {
        username: "team14",
        password: "cniueargfe"
      }
    );
    this.client.on("connect", () => {
      console.log("MqttClient is correctly connected");
    });

    this.client.on("error", err => {
      console.error("MttqClientError", err);
    });
  }

  reset() {
    console.warn("Reseting");
    const topic = "team14/prod/city/reset";
    this.client.publish(topic, Math.random().toString());
  }

  teleport(vehicle_type, destinationX, destinationY) {
    const topic = "team14/prod/user/path-to-target";
    const payload = {
      vehicle_type,
      path: [
        [destinationX - 0.1, destinationY],
        [destinationX, destinationY]
      ],
      costs: [0.0, 0.0]
    };
    console.log("Teleporting", payload);
    this.client.publish(topic, JSON.stringify(payload).toString());
  }

  changeTrafficConditions(roads) {
    const topic = `${TEAM}/prod/city/morph/traffic_conditions`;
    console.log("Update Traffic Conditions", roads);
    this.client.publish(topic, JSON.stringify(roads).toString());
  }

  updateMetroLine(lines) {
    const topic = `${TEAM}/prod/city/morph/lines_state`;
    this.client.publish(topic, JSON.stringify(lines).toString());
  }

  updateRoads(roads) {
    const topic = `${TEAM}/prod/city/morph/roads_status`;
    console.log(JSON.stringify(roads).toString())
    this.client.publish(topic, JSON.stringify(roads).toString());
  }

  updateWeather(weather) {
    const topic = `${TEAM}/prod/context/change/weather`;
    this.client.publish(
      topic,
      JSON.stringify({ condition: weather }).toString()
    );
  }

  updateAirQuality(quality) {
    const topic = `${TEAM}/prod/context/change/air`;
    this.client.publish(
      topic,
      JSON.stringify({ condition: quality }).toString()
    );
  }

  startMission(payload) {
    const topic = `${TEAM}/prod/user/mission`;
    console.log(JSON.stringify(payload).toString())
    this.client.publish(topic, JSON.stringify(payload).toString());
  }

  breakTaxi(id) {
    const topic = `${TEAM}/prod/environment/change/breakdown`;
    this.client.publish(topic, JSON.stringify({ vehicle: id }).toString());
  }
}

export default new MqttClient();
