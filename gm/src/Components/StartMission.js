import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function ListOfPoints(props) {
  const { listOfEdges } = props;
  console.log(listOfEdges)
  return (
    <List style={{ maxHeight: "300", overflow: "auto" }}>
      {listOfEdges.map((item, i) => {
        return (
          <ListItem key={i}>
            <ListItemText
              primary={'( ' + item.x.toString() + ', ' + item.y.toString() + ' )' }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
export default function StartMission(props) {
  const { updateRoads } = props;
  const classes = useStyles();
  const [missionText, setMissionText] = React.useState('');
  const [listOfEdges, setListOfEdges] = React.useState([]);
  const [xCoordinate, setXCoordinate] = React.useState('');
  const [yCoordinate, setYCoordinate] = React.useState('');

  const handleChangeXCoordinate = event => {
    setXCoordinate(event.target.value);
  };
  const handleChangeYCoordinate = event => {
    setYCoordinate(event.target.value);
  };
  const handleChangeMissionText = event => {
    setMissionText(event.target.value);
  };
  const handleAdd = () => {
    setListOfEdges([
      ...listOfEdges,
      { 'x':parseFloat(xCoordinate), 'y': parseFloat(yCoordinate)}
    ]);
  };

 

  return (
    <div
      style={{
        width: 'auto',
        height: "auto",
        padding: "10px",
        marginTop: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: "3%",
        border: "1px solid grey",
        boxShadow: "10px 5px 5px grey"
      }}
    >
      <h3> Start Mission</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>

          <TextField
            multiline={true}
            rows={2}
            rowsMax={4}
            label="Mission Text"
            onChange={handleChangeMissionText}
          />
          <TextField label='xCoordinate' onChange={handleChangeXCoordinate} />
          <TextField label='yCoordinate' onChange={handleChangeYCoordinate} />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <Button variant="contained" onClick={handleAdd}>
              Add
            </Button>
            <Button variant="contained" >
              Validate
            </Button>
          </div>
        </div>
        <div style={{ maxHeight: "300", overflow: "auto" }}>
          <ListOfPoints listOfEdges={listOfEdges} />
        </div>
      </div>
    </div>
  );
}
