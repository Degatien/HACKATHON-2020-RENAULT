/*
const mqtt = require('mqtt');

let client

export function toConnect(domain="wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443", user="team14", pass="cniueargfe") {
  console.log(domain,  user, pass)
  if (client) {
    console.log("disconnecting")
    client.end();
  }
  client = mqtt.connect(domain, {
    username: user,
    password: pass
  });
}

toConnect()
export function getClient() {return client}
*/