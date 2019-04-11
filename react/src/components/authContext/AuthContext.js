import React from 'react'
import { BrowserRouter as Router,
Route, Redirect } from 'react-router-dom';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = {
    validUser: false,
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
      })
    } else{
      alert("wrong credentials")
    }
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
