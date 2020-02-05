import React from 'react'

class ItineraryDetails extends React.Component {
  render() {
    const {itinerary} = this.props
    return (
      <div>
        {itinerary}
      </div>
    )
  }
}

export default ItineraryDetails