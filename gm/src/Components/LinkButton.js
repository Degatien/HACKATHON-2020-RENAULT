import React, { Component } from 'react';
import { Button } from '@material-ui/core'

function publish() {
    var mqtt = require('mqtt')

    var settings = {
        username: 'team14',
        password: 'cniueargfe',

      }
      
      
    var client  = mqtt.connect('wss://mr1dns3dpz5mjj.messaging.solace.cloud:8443/', settings)
    

    client.on('connect', function () {
        client.publish('team14/prod/city/reset', '')
        console.log('publish reset')
    })

    client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
    })

}

export default function LinkButton(props) {

    return (
        <Button style={{width: '20%'}} variant='contained' onClick={publish}> RESET</Button>
    )
}