import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect } from "react-router-dom";
import Question from '../../components/question/Question'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

class Test extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
    };
    this.handleClick = this.handleClick.bind(this);
}

//api call for get questions list
handleClick(event){
    event.preventDefault();
    fetch('https://opentdb.com/api.php?amount=20&difficulty=easy', {
      method:'GET'
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });

  }
 render() {
   if(this.state.data.length !=0 ){
     return (
       <div>
         <Question data={this.state.data}/>
       </div>
       )
   }
   return (
     <main className={ this.props.classes.main}>
        <CssBaseline />
        <Paper className={this.props.classes.paper}>
        <form  className={this.props.classes.form}>
          <Typography align="center" component="h1" variant="h5">
            Test
          </Typography>
          <br/>
          <Typography align="center" component="h1" variant="h5">
            Type:Genral knoledge
          </Typography>
          <br/>
           <Typography align="center" component="h1" variant="h5">
             Duration:1 Hour
           </Typography>
           <br/>
           <Typography align="center" component="h1" variant="h5">
             Total Question:19
           </Typography>
           <br/>
           <Button onClick={this.handleClick}  fullWidth variant="contained" color="primary" className={this.props.classes.submit}>Start Test</Button>
        </form>
       </Paper>
     </main>
   )
  }
}

export default withStyles(styles) (Test);
