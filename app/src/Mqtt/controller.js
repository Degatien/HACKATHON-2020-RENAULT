import { getRoadStatusCar } from '../Api/Path';

const client = require('./connection')

function onLineStateChange(payload) {
  console.log(payload)
}
function onRoadStatusChange(payload) {
  console.log(payload)
  getRoadStatusCar().then(value => {
    console.log(value);
  })
}
function onObjectiveReached(payload) {
  console.log(payload)
}
function onWeatherChange(payload) {
  console.log(payload)
}
function onAirChange(payload) {
  console.log(payload)
}
function onTrafficChange(payload) {
  console.log(payload)
}
function onTaxiBreakdown(payload) {
  console.log(payload)
}
function onMissionArrived(payload) {
  console.log(payload)
}

const callbacks = new Map([
  ['team14/prod/environment/change/lines_state', onLineStateChange],
  ['team14/prod/environment/change/roads_status', onRoadStatusChange],
  ['team14/prod/user/objective-reached', onObjectiveReached],
  ['team14/prod/context/change/weather', onWeatherChange],
  ['team14/prod/context/change/air', onAirChange],
  ['team14/prod/environment/change/traffic_conditions', onTrafficChange],
  ['team14/prod/environment/change/breakdown', onTaxiBreakdown],
  ['team14/prod/user/mission', onMissionArrived],
])

client.on('connect', () => {
  callbacks.forEach((value, key) => {
    client.subscribe(key)
  })
})

client.on('message', (topic, message) => {
  if (!callbacks.get(topic)) {
    return
  }
  callbacks.get(topic)(message)
})