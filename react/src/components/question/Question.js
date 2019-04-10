import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import EndTest from '../../components/endTest/EndTest';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const pagination = {
  margin: "0",
  padding: "10px"
}

const paginationLi = {
  display: "inline-block",
  padding: "0 5px",
  cursor: "pointer"
}
const li = {
  listStyleType: "none"
}

const styles = theme => ({

  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

class Question extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      questionPerPage: 1,
      correctanswer: '',
      incorrectanswers: '',
      count: 1,
      userAns: {},
      thankyou: false
    };
    this.handleAanswerChange = this.handleAanswerChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.completeForm = this.completeForm.bind(this);
    this.question = React.createRef();
    this.ul = React.createRef();
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    this.setState({count: (this.state.count + 1)})
  }
  componentDidMount() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  handleAanswerChange(event) {
    this.setState({
      userAns: {
        ...this.state.userAns,
        [this.state.currentPage]: {
          question: this.question.current.innerText,
          answer: event.target.value
        }
      }
    })
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    //bydefault uncheck all the radiobuttons
    if(this.ul.current.querySelectorAll("input:checked").length > 0) {
      this.ul.current.querySelectorAll("input:checked")[0].checked = false;
    }
  }
  //check the radiobuttons which has already given the answer
  componentDidUpdate() {
    const radios = document.getElementsByTagName('input');

    Object.entries(this.state.userAns).forEach(
      ([key, value]) => {
        if(this.state.currentPage === parseInt(key)) {
          for (let i = 0; i < radios.length; i++) {
            if (value.answer === radios[i].value) {
              radios[i].checked = true;
              return false
            }
          }
        }
      }
    );
  }
  completeForm(event) {
    this.setState({
      thankyou : true
    });
    clearInterval(this.timer)
  }

  render() {
    if(this.state.thankyou ){
      return(
        <div>
          <EndTest userResponse={this.state.userAns} originalResponse={this.props.data.results}/>
        </div>
      )
    }
    //pagination
    const { currentPage,questionPerPage} = this.state;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(Object.keys(this.props.data.results).length / questionPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number-1} onClick={this.handleClick} style={paginationLi}>
          {number}
        </li>
      )
    });

    return (
      <div className="">
        <h1>Time:- {this.state.count}</h1>
        <h1>Question Number:- {currentPage+1}</h1>
        <ul ref={this.ul}>
          <li style={li}>
            <div  ref={this.question}>{this.props.data.results[currentPage].question}</div>
          </li>
          <li style={li} onChange={this.handleAanswerChange}>
            <input type="radio" name={currentPage+"que"} value={this.props.data.results[currentPage].correct_answer} />
            {this.props.data.results[currentPage].correct_answer}
          </li>
          {
            this.props.data.results[currentPage].incorrect_answers.map((value, index) => {
              return (
                <li style={li} key={index} onChange={this.handleAanswerChange}>
                  <input type="radio" value={value} name={currentPage+"que"} />
                  {value}
                </li>
              )
            })
          }
        </ul>
        <ul style={pagination}  id="page-numbers">
          {renderPageNumbers}
        </ul>
        <Button onClick={this.completeForm} fullWidth variant="contained" color="primary" className={this.props.classes.submit}>End Test</Button>
      </div>
    )
  }
}

export default withStyles(styles) (Question);
