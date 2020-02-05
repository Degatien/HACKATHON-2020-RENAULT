import * as mqtt from "mqtt";

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
      //   client.publish("team14/prod/city/reset", "");
      console.log("MqqtClient is correctly connected");
    });

    this.client.on("error", err => {
      console.error("MttqClientError", err);
    });
  }

  reset() {
    const topic = "team14/prod/city/reset";
    this.client.publish(topic, "");
  }
}

export default new MqqtClient();
