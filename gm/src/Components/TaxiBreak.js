import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function TaxiBreak(props) {
  const { changeTrafficConditions } = props;
  const [vehiculeId, setVehiculeId] = React.useState("");

  const handleChangeVehiculeId = event => {
    setVehiculeId(event.target.value);
  };

  return (
    <div style={{ width: 300, height: 170, padding:10, marginTop:'15px', marginRight: 'auto', marginLeft:'auto', display: 'flex', flexDirection: 'column', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>
      <h3> Robotaxi break</h3>

      <TextField
        label="Vehicule Id"
        type="number"
        onChange={setVehiculeId}
      />
      <Button variant="contained" >
        Validate
      </Button>
    </div>
  );
}
