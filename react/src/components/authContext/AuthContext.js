import React from 'react'
import { BrowserRouter as Router,
Route, Redirect } from 'react-router-dom';

const AuthContext = React.createContext()
let val = {};

class AuthProvider extends React.Component {
  state = {
    validUser: false,
    serverError: ""
  };

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  login(event) {
    event.preventDefault();
    let email,password;
    if((document.querySelector("#email").value === "") && (document.querySelector("#password").value === "")) {
      document.querySelector("#email").style.borderColor = 'red';
      document.querySelector("#password").style.borderColor = 'red';
    } else if(document.querySelector("#password").value === "") {
      document.querySelector("#password").style.borderColor = 'red';
    } else if (document.querySelector("#email").value==="manali" && document.querySelector("#password").value === "manali" ){
      this.setState({
        validUser: true,
        //data: responseJson
      })
    } else{
      alert("Are you mad!")
    }
/*
    return fetch('https://reqres.in/api/register', {
        method:'POST',
        body: JSON.stringify({email:email,password:password}),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then((response) => {
        this.setState({
          serverError: response.status === 504 ? 'Something went wrong.' : null
        })
        return response.json()
      })
      .then((responseJson) => {
        if(responseJson !== undefined) {
          this.setState({
            validUser: true,
            data: responseJson
          })
        }
      })
      .catch((error) => {
        console.error("request unsuccesful",error);
      });
*/
  }
  logout() {
    this.setState({ validUser: false })
    localStorage.removeItem("validUser")
  }
  render() {
    if(this.state.validUser) {
      localStorage.setItem("tc", this.state.token)
      localStorage.setItem("validUser", this.state.validUser)
    }
    return (
      <div>
      <AuthContext.Provider
        value={{
          validUser: this.state.validUser,
          login: this.login,
          logout: this.logout,
          data: this.state.data,
          serverError : this.state.serverError
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
      {
            this.state.validUser  && (<Redirect to={{
            pathname: "/test",
            state: { validUser: this.state.validUser }
          }}/>)
      }
    </div>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
export default AuthContext
