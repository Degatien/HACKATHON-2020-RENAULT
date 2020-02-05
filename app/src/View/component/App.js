import React from 'react'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation'
import SideTabs from './SideTabs/SideTabs'
import Tab from './SideTabs/Tab'
// import Map from './Map/Map'
import ItineraryDetails from './ItineraryDetails/ItineraryDetails'
import '../statics/css/App.css';
import { moveCharacter, stopCharacter } from '../../Mqtt/publisher';
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
      itineraries: ['itinerary 1', 'itinerary 2'],
      currentTab: 0
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.submitDirection = this.submitDirection.bind(this)
    this.selectItinerary = this.selectItinerary.bind(this)
    this.changeTab = this.changeTab.bind(this)
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

  changeTab(event, newTab) {
    this.setState({currentTab: newTab})
  }

  render() {
    const {currentTab} = this.state
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Fab variant="extended" onClick={this.openMenu}>
            <NavigationIcon />
            Navigate
          </Fab>

          <SideTabs currentTab={currentTab} changeTab={this.changeTab} />
          <Tab isOpen={currentTab === 0} content={"Eco"} />
          <Tab isOpen={currentTab === 1} content={"Confort"} />
          <Tab isOpen={currentTab === 2} content={"Rapidité"} />

        </div>
      </ThemeProvider>
    )
  }
}

export default App
