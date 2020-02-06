import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import SideTabs from './SideTabs/SideTabs'
import Tab from './SideTabs/Tab'
import AlertBox from './AlertBox/AlertBox'
// import Map from './Map/Map'
import ItineraryDetails from './ItineraryDetails/ItineraryDetails'
import '../statics/css/App.css';
import { moveCharacter, stopCharacter } from '../../Mqtt/publisher';
import '../../Mqtt/controller';
import '../statics/css/App.css';
import '../../Mqtt/controller';
import Title from './Title/Title';
import MeteoBar from './MeteoBar/MeteoBar';
import purple from '@material-ui/core/colors/purple';
import Alert from '@material-ui/lab/Alert';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#7e57c2',
    },
  },
  spacing: 8,
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
      alerts: [
        {severity: 'info', message: 'Il fait beau, vous devriez prendre le trajet éco.'},
        {severity: 'warning', message: 'Il y a des embouteillages, vous devirez prendre le trajet éco.'},
        {severity: 'error', message: 'L\'air est polué, vous devriez prendre le trajet confort'}
      ]
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
    const {currentTab, alerts} = this.state
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Title
            getBroker={this.getBroker}
          />
          <MeteoBar />
          <Box name='Body' display="flex">

          <SideTabs currentTab={currentTab} changeTab={this.changeTab} />
          {alerts && alerts.length !== 0 && (
            <Box flexGrow={0.4} p={5} pr={0}>
              <AlertBox alerts={alerts} />
            </Box>)}
            <Box flexGrow={1} p={5}>
              <Tab isOpen={currentTab === 0} content={"This is the \"Eco\" itinerary, please enjoy it and thank you for saving the planet and your body."} />
              <Tab isOpen={currentTab === 1} content={"Confort"} />
              <Tab isOpen={currentTab === 2} content={"Rapidité"} />
            </Box>
            </Box>

          </div>
      </ThemeProvider>
    )
  }
}


export default App
