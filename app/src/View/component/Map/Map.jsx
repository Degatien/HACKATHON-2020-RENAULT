import React from 'react'
import map from '../../statics/img/map.png'


class Map extends React.Component {
  render() {
    return (
      <img src={map} style={{width: '100%'}} alt="Map" />
    )
  }
}

export default Map