import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class DirectionMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onChange = this.onChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  onKeyPress(event) {
    const {input} = this.state
    const {onSubmit} = this.props
    if(event.key === "Enter"){
      onSubmit(input)
    }
  }

  onChange(event) {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state
    const {onSubmit} = this.props
    return (
      <div name='direction-input' className='direction-input'>
        <TextField onChange={this.onChange} onKeyPress={this.onKeyPress} label="Where to ?" variant="outlined" />
        <Button onClick={() => onSubmit(input)}><FontAwesomeIcon icon={faCheck} /></Button>
      </div>
    )
  }
}

export default DirectionMenu