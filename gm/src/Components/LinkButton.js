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
        <div style={{ width: 300, height: 300, margin: 'auto', display: 'flex', flexDirection: 'column', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>
            <Button style={{width: '20%', marginLeft: 'auto', marginRight: 'auto'}} variant='contained' onClick={publish}> RESET</Button>
        </div>
    )
}