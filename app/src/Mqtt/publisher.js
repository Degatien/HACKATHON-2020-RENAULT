const mqtt = require('mqtt');
const client = mqtt.connect('wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443', {
  username: 'team14',
  password: 'cniueargfe'
});

// RESET
export function resetCity () {
  client.publish('team14/prod/city/reset', 'resetting')
  sendStateUpdate();
}

function sendStateUpdate () {
  console.log('sending state %s')
  client.publish('team14/prod/city/reset')
}