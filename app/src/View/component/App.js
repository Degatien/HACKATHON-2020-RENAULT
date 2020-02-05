import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavigationIcon from '@material-ui/icons/Navigation'
import SideTabs from './SideTabs/SideTabs'
import Tab from './SideTabs/Tab'
// import Map from './Map/Map'
import ItineraryDetails from './ItineraryDetails/ItineraryDetails'
import '../statics/css/App.css';
import { moveCharacter, stopCharacter } from '../../Mqtt/publisher';
import '../../Mqtt/controller';
import '../statics/css/App.css';
import '../../Mqtt/controller';
import Title from './Title/Title';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#7e57c2',
    },
  },
});

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
      itineraries: ['itinerary 1', 'itinerary 2'],
      currentTab: 0,
      domain: "",
      username: "",
      password: "",
    }
    this.submitDirection = this.submitDirection.bind(this)
    this.selectItinerary = this.selectItinerary.bind(this)
    this.changeTab = this.changeTab.bind(this)
  }

  submitDirection(direction) {
    console.log(`Going to "${direction}".`)
  }

  selectItinerary(itinerary) {
    this.closeMenu()
    this.setState({currentItinerary: itinerary})
    console.log(`Itinerary "${itinerary}" selected.`)
  }

  getBroker = (domain, username, password) => {
    this.setState({
      domain: domain,
      username: username,
      password: password
    })
  }

  changeTab(event, newTab) {
    this.setState({currentTab: newTab})
  }

  render() {
    const {currentTab} = this.state
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Title 
            getBroker={this.getBroker}
          />
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
