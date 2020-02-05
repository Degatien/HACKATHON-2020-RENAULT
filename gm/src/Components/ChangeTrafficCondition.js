import React from 'react';
import { TextField, Button } from '@material-ui/core';



export default function Teleport(props) {
  const [edge, setEdge] = React.useState('');
  const [slowingFactor, setSlowingFactor] = React.useState('');

  const handleChangeEdge = event => {
    setEdge(event.target.value);
  };
  const handleChangeSlowingFactor = event => {
    setSlowingFactor(event.target.value);
  };

  return (
    <div style={{ width: 300, height: 200, margin: 'auto', display: 'flex', flexDirection: 'column', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>
      <h3> Change Traffic Conditions</h3>
      
      <TextField label='Edge to modify traffic on' onChange={handleChangeEdge}/>
      <TextField label='Slowing factor' onChange={handleChangeSlowingFactor}/>
      <Button variant='contained'>Validate</Button>

    </div>
)
}