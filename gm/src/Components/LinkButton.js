import React from "react";
import { Button } from "@material-ui/core";

export default function LinkButton(props) {
  const { onClickFunction } = props;
  return (
    <div style={{ width: 300, height: 40, margin: 'auto', display: 'flex', flexDirection: 'column', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>

    <Button
      variant="contained"
      onClick={() => onClickFunction()}
    >
      {" "}
      RESET
    </Button>
    </div>

  );

}
