import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

class SideTabs extends React.Component {
  render() {
    const {changeTab, currentTab} = this.props
    return (
      <Tabs
        orientation="vertical"
        value={currentTab}
        onChange={changeTab}
        aria-label="Vertical tabs"
        className="tabs">
        <Tab label="Eco" {...a11yProps(0)} />
        <Tab label="Confort" {...a11yProps(1)} />
        <Tab label="Rapidité" {...a11yProps(2)} />
      </Tabs>
    )
  }
}

export default SideTabs