import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

class Itineraries extends React.Component {
  render() {
    const {itineraries, selectItinerary} = this.props
    return (
      <List component="nav" aria-label="main mailbox folders">
        {itineraries.map(itinerary => (
          <ListItem key={itinerary} button onClick={() => selectItinerary(itinerary)}>
            <ListItemText primary={itinerary} />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default Itineraries