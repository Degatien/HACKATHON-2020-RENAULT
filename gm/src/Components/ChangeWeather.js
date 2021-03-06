import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function ChangeWeather(props) {
  const { updateWeather } = props;
  const classes = useStyles();
  const [weather, setWeather] = React.useState("close");

  const handleChangeWeather = event => {
    setWeather(event.target.value);
  };


  const handleValidate = () => {
    updateWeather(weather);
  }

  return (
    <div
      style={{
        width: 300,
        height: 170,
        padding:10,
        marginTop:'15px', 
        marginRight: 'auto', 
        marginLeft:'auto',
        display: "flex",
        flexDirection: "column",
        borderRadius: "3%",
        border: "1px solid grey",
        boxShadow: "10px 5px 5px grey"
      }}
    >
      <h3> Set Weather</h3>
     

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Weather</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={weather}
          onChange={handleChangeWeather}
        >
          <MenuItem value={"snow"}>Snow</MenuItem>
          <MenuItem value={"rain"}>Rain</MenuItem>
          <MenuItem value={"heat wave"}>Heat wave</MenuItem>
          <MenuItem value={"normal"}>Normal</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleValidate} >
        Validate
      </Button>
    </div>
  );
}
