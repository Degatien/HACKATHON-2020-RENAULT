const client = require('./connection')

// RESET
export function moveCharacter({vehicle_type = "walk", target}) {
  client.publish('team14/prod/user/path', JSON.stringify({vehicle_type, target}))
}

export function stopCharacter() {
  client.publish('team14/prod/user/stop')
}