import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const page={
  marginTop:"30px"
}

class Home extends Component {
  render() {
    return (
      <div>
        <Typography style={page} align="center" variant="title" color="inherit">
            Home
        </Typography>
      </div>
    );
  }
}
export default Home;
