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

export default function OpenOrCloseSubway(props) {
  const { updateMetroLine } = props;
  const classes = useStyles();
  const [openOrClose, setOpenOrClose] = React.useState("close");
  const [subwayEdge, setSubwayEdge] = React.useState(0);

  const handleChangeOpenOrClose = event => {
    setOpenOrClose(event.target.value);
  };
  const handleChangeSubwayEdge = event => {
    setSubwayEdge(event.target.value);
  };

  const handleValidate = () => {
    const payload = [{ line: `edge_${subwayEdge}`, state: openOrClose }];
    updateMetroLine(payload);
  };

  return (
    <div
      style={{
        width: 300,
        height: 230,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "3%",
        border: "1px solid grey",
        boxShadow: "10px 5px 5px grey"
      }}
    >
      <h3> OpenOrCloseSubway</h3>
      <TextField
        label="Metro Edge"
        type="number"
        onChange={handleChangeSubwayEdge}
      />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Transport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={openOrClose}
          onChange={handleChangeOpenOrClose}
        >
          <MenuItem value={"open"}>Open</MenuItem>
          <MenuItem value={"close"}>Close</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleValidate}>
        Validate
      </Button>
    </div>
  );
}
