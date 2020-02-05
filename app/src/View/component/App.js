import React from 'react'
import Fab from '@material-ui/core/Fab'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation'
import SideMenu from './SideMenu/Menu'
import '../css/App.css';

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
    console.log(`Itinerary "${itinerary}" selected.`)
  }

  render() {
    const {menuOpen, itineraries} = this.state
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
        </div>
      </ThemeProvider>
    )
  }
}

export default App
