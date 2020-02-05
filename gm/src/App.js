import React from "react";
import "./App.css";
import LinkButton from "./Components/LinkButton";
import Teleport from "./Components/Teleport";
import ChangeTrafficCondition from "./Components/ChangeTrafficCondition";
import mqttClient from "./api/mqttClient";
import OpenOrCloseSubway from "./Components/OpenOrCloseSubway";
import CloseOrOpenRoad from "./Components/CloseOrOpenRoad";
import ChangeWeather from './Components/ChangeWeather'
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
      <CloseOrOpenRoad updateRoads={mqttClient.updateRoads.bind(mqttClient)} />
      <ChangeWeather/>

    </div>
  );
}

export default App;
