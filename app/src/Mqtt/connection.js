const mqtt = require('mqtt');

const client = mqtt.connect('wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443', {
  username: 'team14',
  password: 'cniueargfe'
});

module.exports = client