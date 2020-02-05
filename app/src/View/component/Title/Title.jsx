import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar'
import '../../statics/css/Title.css';
import { MdSettings } from "react-icons/md"
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      domain: "",
      username: "",
      password: "",
    }
  }

  handleClose = () => {
    this.props.getBroker(this.state.domain, this.state.username, this.state.password)
    this.setState({isOpen: false})
  }

  render() {
    return (
    <AppBar position="static" color="primary" className="AppBar">
      <ToolBar>
        <Typography variant="h3" className="Title">
            Safe Trip
        </Typography>
        <Button onClick={() => {
          this.setState({isOpen: true})
        }}>
          <MdSettings className="Settings" />
        </Button>
        <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="domain"
                label="Domaine"
                type="text"
                fullWidth
                onChange={(e) => {this.setState({domain: e.target.value})}}
              />
              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Username"
                type="text"
                fullWidth
                onChange={(e) => {this.setState({username: e.target.value})}}

              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => {this.setState({password: e.target.value})}}
              />
            </DialogContent>
          <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Connect
          </Button>
        </DialogActions>
      </Dialog>
      </ToolBar>
    </AppBar>
    )
  }
}

export default Title;