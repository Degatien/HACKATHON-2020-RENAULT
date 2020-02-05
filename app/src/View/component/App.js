import React from 'react'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation'
import SideMenu from './SideMenu/Menu'
import Map from './Map/Map'
import ItineraryDetails from './ItineraryDetails/ItineraryDetails'
import '../statics/css/App.css';
import { resetCity } from '../../Mqtt/publisher';
import '../../Mqtt/controller';

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      anchorLeft: {
        marginTop: 64
      }
    }
  }
});

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
      itineraries: ['itinerary 1', 'itinerary 2']
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.submitDirection = this.submitDirection.bind(this)
    this.selectItinerary = this.selectItinerary.bind(this)
  }

  openMenu() {
    this.setState({menuOpen: true})
  }
  closeMenu() {
    this.setState({menuOpen: false})
  }

  submitDirection(direction) {
    console.log(`Going to "${direction}".`)
  }

  selectItinerary(itinerary) {
    this.closeMenu()
    this.setState({currentItinerary: itinerary})
    console.log(`Itinerary "${itinerary}" selected.`)
  }

  render() {
    const {menuOpen, itineraries, currentItinerary} = this.state
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Fab variant="extended" onClick={this.openMenu}>
            <NavigationIcon />
            Navigate
          </Fab>

          <SideMenu
            isOpen={menuOpen}
            onClose={this.closeMenu}
            submitDirection={this.submitDirection}
            itineraries={itineraries}
            selectItinerary={this.selectItinerary} />
          <Map />
          {currentItinerary && <ItineraryDetails itinerary={currentItinerary} />}
          <Button onClick={() => resetCity()}>Click</Button>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
