import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinkButton from './Components/LinkButton'
import mqqtClient from './api/mqttClient'

function App() {
  return (
    <div style={{ display:'flex', flexDirection:'column', }} >
      <LinkButton variant="full" />
    </div>
  )
}

export default App;
