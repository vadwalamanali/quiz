import React, { Component } from 'react';
import AppRoute from './AppRoute';
import Header from '../components/header/Header'
import { AuthProvider } from '../components/authContext/AuthContext'

class MainPage extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <Header />
          <AppRoute />
        </AuthProvider>
      </div>
    );
  }
}

export default MainPage;
