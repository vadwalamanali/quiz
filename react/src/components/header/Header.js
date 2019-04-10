import React, { Component } from 'react';
import { AuthConsumer } from '../../components/authContext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


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
                  {({ validUser, login, logout,register}) => (
                    <React.Fragment>
                    {validUser || localStorage.validUser === "true" ? (
                      
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="/" className="nav-link" onClick={logout}>Logout</Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="navbar-nav ml-auto loginsignupWrapper">
                        <li className="nav-item">
                          <Link to="/login" color="inherit" className="nav-link" id="login">Login</Link>
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
