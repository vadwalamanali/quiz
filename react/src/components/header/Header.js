import React, { Component } from 'react';
import { AuthConsumer } from '../../components/authContext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const li = {
  listStyleType: "none",
}
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};

class Header extends Component{
  render() {
    return(
      <React.Fragment>
        <header className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
                <AuthConsumer>
                  {({ validUser, login, logout}) => (
                    <React.Fragment>
                    <ul>
                      <li style={li}>
                        <Link   to="/" color="inherit">Home</Link>
                      </li>
                    </ul>
                    {validUser || localStorage.validUser === "true" ? (

                      <ul>
                        <li style={li}>
                          <Link  to="/"  onClick={logout}>Logout</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="">
                        <li style={li}>
                          <Link to="/login" color="inherit"  id="login">Login</Link>
                        </li>
                      </ul>

                    )}
                    </React.Fragment>
                  )}
                </AuthConsumer>
                </Toolbar>
                </AppBar>
        </header>
      </React.Fragment>
    )
  }
}

export default withStyles(styles) (Header);
