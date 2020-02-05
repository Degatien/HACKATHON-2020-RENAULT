import React from "react";
import "./App.css";
import LinkButton from "./Components/LinkButton";
import Teleport from "./Components/Teleport";
import ChangeTrafficCondition from "./Components/ChangeTrafficCondition";
import mqttClient from "./api/mqttClient";
import OpenOrCloseSubway from "./Components/OpenOrCloseSubway";
import CloseOrOpenRoad from "./Components/CloseOrOpenRoad";
import ChangeWeather from "./Components/ChangeWeather";
import StartMission from './Components/StartMission'
function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
        gridAutoRows: "minmax(100px, auto)"
      }}
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
      <ChangeWeather
        updateWeather={mqttClient.updateWeather.bind(mqttClient)}
      />
      <StartMission/>
    </div>
  );
}

export default App;
