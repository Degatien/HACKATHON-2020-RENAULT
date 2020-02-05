  import React from 'react'
import ToolBar from '@material-ui/core/Toolbar'
import '../../statics/css/MeteoBar.css';
import { getAirQuality, getMeteo} from '../../../Api/Context'
import {FaCloudRain, FaCloudSun, FaSnowflake, FaSun} from 'react-icons/fa'

class MeteoBar extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    getMeteo().then(value => {
      getAirQuality().then(value2 => {
        this.setState({
          meteo: value.condition,
          air: value2.condition,
          icon: value.condition === "rain" ? FaCloudRain 
            : value.condition === "snow" ? FaSnowflake 
              : value.condition === "normal" ? FaCloudSun : FaSun
        })
      })
    })
    return this.state.air && this.state.meteo ? 
      (
        <ToolBar>
          <marquee  className="Barr"> 
            {"Meteo : "}
            <this.state.icon/> 
            {" " + this.state.meteo.toUpperCase()  + " | Air Condition : " + this.state.air.toUpperCase()}

          </marquee>
        </ToolBar>
      ) :
      null;
  }
}

export default MeteoBar