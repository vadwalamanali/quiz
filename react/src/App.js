import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import './styles/bootstrap.min.css';
import './styles/fontawesome-all.min.css';
import './styles/leaflet.css';
import './styles/style.css';
import 'typeface-roboto';

import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <div id="app">
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
