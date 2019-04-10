import React, { Component } from 'react';
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


class EndTest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }
  //get the total sore of test
  componentDidMount() {
    const userResult = this.props.originalResponse;
    var i = 0;
    Object.entries(this.props.userResponse).forEach(([key, value]) => {
    	if(value.answer === userResult[key].correct_answer) {
        i++
      }
    })
    this.setState({result: i})
  }

  render() {
    return(
      <main className={ this.props.classes.main}>
        <CssBaseline />
        <Paper className={this.props.classes.paper}>
        <Typography align="center" component="h1" variant="h5">
            Your Total Score is:{this.state.result}
        </Typography>
        <Typography align="center" component="h1" variant="h5">
          Thank You For Giving The Test
        </Typography>
        </Paper>
      </main>
    )
  }
}
export default withStyles(styles) (EndTest);
