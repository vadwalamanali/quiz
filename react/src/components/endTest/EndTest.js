import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


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
      <div>
        <Typography align="center" component="h1" variant="h5">
            Your Total Score is:{this.state.result}
        </Typography>
        <Typography align="center" component="h1" variant="h5">
          Thank You For Giving The Test
        </Typography>
      </div>
    )
  }
}
export default withStyles(styles) (EndTest);
