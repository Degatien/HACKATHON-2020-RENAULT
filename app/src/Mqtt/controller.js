import { getRoadStatusCar } from '../Api/Path';
import mqtt from 'mqtt';
import React from 'react';

function stringify(value) {
  return `${value.locations.from.x},${value.locations.from.y} and ${value.locations.to.x},${value.locations.to.y}`
}

export function Subscribe (Component) {
  return class subscribe extends React.Component {
    constructor () {
      super();
      this.callbacks = new Map([
        ['team14/prod/environment/change/lines_state', this.onLineStateChange],
        ['team14/prod/environment/change/roads_status', this.onRoadStatusChange],
        ['team14/prod/user/objective-reached', this.onObjectiveReached],
        ['team14/prod/context/change/weather', this.onWeatherChange],
        ['team14/prod/context/change/air', this.onAirChange],
        ['team14/prod/environment/change/traffic_conditions', this.onTrafficChange],
        ['team14/prod/environment/change/breakdown', this.onTaxiBreakdown],
        ['team14/prod/user/mission', this.onMissionArrived],
      ])
      this.toConnect();

      this.state = {roadAlerts:[], missionAlert:[]}

      this.toConnect= this.toConnect.bind(this);
    }

    onLineStateChange = (payload) => {
      console.log(payload)
    }
    onRoadStatusChange = (payload) => {
      console.log(payload)
      getRoadStatusCar().then(value => {
        this.setState({
          roadAlerts : value.map(v => {
            return {severity: "warning", message: `Road blocked between ${stringify(v)}`, coordinate: v}
          })
        })
        console.log(value);
      })
    }
    onObjectiveReached = (payload) => {
      console.log(payload)
    }
    onWeatherChange = (payload) => {
      console.log(payload)
    }
    onAirChange = (payload) => {
      console.log(payload)
    }
    onTrafficChange = (payload) => {
      console.log(payload)
    }
    onTaxiBreakdown = (payload) => {
      console.log(payload)
    }
    onMissionArrived = (payload) => {
      console.log(payload.toString())
      const mis = JSON.parse(payload.toString())
      this.setState({
        mission: JSON.parse(payload.toString()),
        missionAlert: [{severity: "info", message: `You received a new mission: ${mis.mission}`}],
      })
    }
    toConnect(domain="wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443", user="team14", pass="cniueargfe") {
      console.log(domain,  user, pass)
      if (this.client) {
        console.log("disconnecting")
        this.client.end();
      }
      this.client = mqtt.connect(domain, {
        username: user,
        password: pass
      });
      this.client.on('connect', () => {
        this.callbacks.forEach((value, key) => {
          this.client.subscribe(key)
        })
      })
      
      this.client.on('message', (topic, message) => {
        if (!this.callbacks.get(topic)) {
          return
        }
        this.callbacks.get(topic)(message)
      })
    }
    render() {
      return <Component 
        roadAlerts={this.state.roadAlerts} 
        missionAlert={this.state.missionAlert} 
        mission={this.state.mission} 
        toConnect={this.toConnect}/>
    }
  }
}