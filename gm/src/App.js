import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkButton from './Components/LinkButton'
import Teleport from './Components/Teleport'
import ChangeTrafficCondition from './Components/ChangeTrafficCondition'
import mqqtClient from './api/mqttClient'
import OpenOrCloseSubway from './Components/OpenOrCloseSubway'
function App() {
  return (
    <div style={{ display:'flex', flexDirection:'column', marginTop: '20px'}} >
      <LinkButton variant="full" onClickFunction={() => mqqtClient.reset()}/>
      <Teleport/>
      <ChangeTrafficCondition/>
      <OpenOrCloseSubway/>
</div>
  )
}

export default App;
