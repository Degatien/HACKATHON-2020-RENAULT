import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Teleport(props) {
  const { teleport } = props;
  const classes = useStyles();
  const [transport, setTransport] = React.useState('');
  const [xCoordinate, setXCoordinate] = React.useState('');
  const [yCoordinate, setYCoordinate] = React.useState('');

  const handleChangeTransport = event => {
    setTransport(event.target.value);
  };
  const handleChangeXCoordinate = event => {
    setXCoordinate(event.target.value);
  };
  const handleChangeYCoordinate = event => {
    setYCoordinate(event.target.value);
  };

  const handleValidate = () => {
    teleport(transport, xCoordinate, yCoordinate);
  }

  return (
    <div style={{ width: 300, height: 300, padding:10, marginTop:'15px', marginRight: 'auto', marginLeft:'auto', display: 'flex', flexDirection: 'column', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>
      <h3> Teleport</h3>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Transport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={transport}
          onChange={handleChangeTransport}
        >
          <MenuItem value={'walk'}>Walk</MenuItem>
          <MenuItem value={'bike'}>Bike</MenuItem>
          <MenuItem value={'car'}>Car</MenuItem>
          <MenuItem value={'subway'}>Subway</MenuItem>
        </Select>
      </FormControl>
      <TextField label='xCoordinate' type='number' onChange={handleChangeXCoordinate}/>
      <TextField label='yCoordinate' type='number' onChange={handleChangeYCoordinate}/>
      <Button variant='contained' onClick={handleValidate}>Validate</Button>

    </div>
)
}