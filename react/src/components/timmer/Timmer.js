import React, { Component } from 'react';
import EndTest from '../../components/endTest/EndTest';

class Timmer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      completed : false
    };
  }
  componentWillUnmount () {
    clearInterval(this.timer)
    this.timer = clearInterval(this.tick.bind(this), 1000)
  }
  tick () {
    this.setState({count: (this.state.count + 1)})
  }
  componentDidMount() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  componentDidUpdate(prevProps, prevState) {
    //timeup the timer after 1 hour
    if(prevState.count >= 3600 ){
      this.setState({count: "time out",completed:true})
      clearInterval(this.timer)
    }
  }
  render(){
    const completed = this.state.completed;
    if(this.state.completed){
      return(
        <div>
          <EndTest userResponse={this.props.userAns} originalResponse={this.props.data.results}/>
        </div>
      )
    }
    return(
      <div>
        <h1>Time:- {this.state.count}</h1>
      </div>
    )
  }
}
export default Timmer;
