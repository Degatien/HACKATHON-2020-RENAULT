const client = require('./connection')

// RESET
export function resetCity () {
  client.publish('team14/prod/city/reset', 'resetting')
  sendStateUpdate();
}

function sendStateUpdate () {
  console.log('sending state %s')
  client.publish('team14/prod/city/reset')
}