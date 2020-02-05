import React from "react";
import { Button } from "@material-ui/core";

export default function LinkButton(props) {
  const { onClickFunction } = props;
  return (
    <Button
      style={{ width: "20%" }}
      variant="contained"
      onClick={onClickFunction}
    >
      {" "}
      RESET
    </Button>
  );
}
