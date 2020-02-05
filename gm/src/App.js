import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinkButton from "./Components/LinkButton";
import Teleport from "./Components/Teleport";
import ChangeTrafficCondition from "./Components/ChangeTrafficCondition";
import mqttClient from "./api/mqttClient";
import OpenOrCloseSubway from "./Components/OpenOrCloseSubway";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <LinkButton
        variant="full"
        onClickFunction={mqttClient.reset.bind(mqttClient)}
      />
      <Teleport teleport={mqttClient.teleport.bind(mqttClient)} />
      <ChangeTrafficCondition
        changeTrafficConditions={mqttClient.changeTrafficConditions.bind(
          mqttClient
        )}
      />
      <OpenOrCloseSubway
        updateMetroLine={mqttClient.updateMetroLine.bind(mqttClient)}
      />
    </div>
  );
}

export default App;
