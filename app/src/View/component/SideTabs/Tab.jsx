import React from 'react'
import Paper from '@material-ui/core/Paper'

class Tab extends React.Component {
  render() {
    const {isOpen, content} = this.props
    return isOpen && (
      <Paper variant="outlined">
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
        {content} <br />
      </Paper>
    )
  }
}

export default Tab