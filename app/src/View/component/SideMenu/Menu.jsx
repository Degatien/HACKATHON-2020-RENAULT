import Drawer from '@material-ui/core/Drawer';
import React from 'react'
import DirectionInput from './DirectionInput'
import Itineraries from './Itineraries'

class Menu extends React.Component {
  render() {
    const {isOpen, onClose, submitDirection, itineraries, selectItinerary} = this.props
    return (
      <Drawer open={isOpen} onClose={onClose}>
        <DirectionInput onSubmit={submitDirection} />
        <Itineraries itineraries={itineraries} selectItinerary={selectItinerary} />
      </Drawer>
    )
  }
}

export default Menu