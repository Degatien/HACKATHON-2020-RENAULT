import React from 'react'
import Card from '@material-ui/core/Card'
import Alert from '@material-ui/lab/Alert';

class AlertBox extends React.Component {
  render() {
    const {alerts} = this.props
    return (
      <Card name="" variant="outlined">
      <>
      {alerts && alerts.length !== 0 && alerts.map(alert => (
        <Alert severity={alert.severity}>{alert.message}</Alert>
        ))}
        </>
      </Card>
    )
  }
}

export default AlertBox