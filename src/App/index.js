import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CharPageContainer from '../CharPage';
import Home from '../Home';
import Navbar from './components/Navbar';


import './index.css';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <main className="uk-container uk-container-expand	">
          <Route path="/home" component={Home} /> 
          <Route path="/charpage/:endpoint" component={CharPageContainer}/>
        </main>
      </div>
    );
  }
}

export default App

