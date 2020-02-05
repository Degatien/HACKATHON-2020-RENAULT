import React from 'react'
import DirectionInput from './DirectionInput'
import Itineraries from './Itineraries'

class Menu extends React.Component {
  render() {
    const {submitDirection, itineraries, selectItinerary} = this.props
    return (
    <>
      <DirectionInput onSubmit={submitDirection} />
      <Itineraries itineraries={itineraries} selectItinerary={selectItinerary} />
    </>
    )
  }
}

export default Menu