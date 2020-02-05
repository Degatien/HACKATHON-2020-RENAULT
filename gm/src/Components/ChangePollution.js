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
  const { updateAirQuality } = props;
  const classes = useStyles();
  const [pollution, setPollution] = React.useState("close");

  const handleChangePolution = event => {
    setPollution(event.target.value);
  };

  const handleValidate = () => {
    updateAirQuality(pollution);
  };

  return (
    <div
      style={{
        width: 300,
        height: 170,
        padding: 10,
        marginTop: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "3%",
        border: "1px solid grey",
        boxShadow: "10px 5px 5px grey"
      }}
    >
      <h3> Set Pollution</h3>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Pollution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pollution}
          onChange={handleChangePolution}
        >
          <MenuItem value={"normal"}>Normal</MenuItem>
          <MenuItem value={"pollution peak"}>Pollution peak</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleValidate}>
        Validate
      </Button>
    </div>
  );
}
