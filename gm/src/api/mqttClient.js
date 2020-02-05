import * as mqtt from "mqtt";
const TEAM = "TEAM14";

class MqqtClient {
  constructor() {
    this.client = mqtt.connect(
      "wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443/",
      {
        username: "team14",
        password: "cniueargfe"
      }
    );
    this.client.on("connect", () => {
      console.log("MqqtClient is correctly connected");
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

    this.client.publish(topic, JSON.stringify(payload).toString());
  }

  changeTrafficConditions(roads) {
    const topic = `${TEAM}/prod/city/morph/traffic_conditions`;
    this.client.publish(topic, JSON.stringify(roads).toString());
  }

  updateMetroLine(lines) {
    const topic = `${TEAM}/prod/city/morph/lines_state`;
    this.client.publish(topic, JSON.stringify(lines).toString());
  }

  updateRoads(roads) {
    const topic = `${TEAM}/prod/city/morph/roads_status`;
    this.client.publish(topic, JSON.stringify(roads).toString());
  }
}

export default new MqqtClient();
