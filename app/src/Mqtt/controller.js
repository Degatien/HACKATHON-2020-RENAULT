const mqtt = require('mqtt');
const client = mqtt.connect('wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443');

client.on('connect', () => {
  client.subscribe('team14/prod/city/reset');
});

client.on('message', (topic, message) => {
  if (topic === 'team14/prod/city/reset') {
    console.log("resetting" + message);
  }
})