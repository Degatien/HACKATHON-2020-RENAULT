const client = require('./connection')

client.on('connect', () => {
  client.subscribe('team14/prod/city/reset');
});

client.on('message', (topic, message) => {
  if (topic === 'team14/prod/city/reset') {
    console.log("resetting" + message);
  }
})