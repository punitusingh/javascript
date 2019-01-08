import React, { Component, Fragment } from 'react';
import Home from './Home';

import './App.css';

class App extends Component {

  state={error:false};

  render() {
  	    console.log(this);
        return <Fragment><Home/>,<h1>Another component</h1></Fragment>;
  }
}


export default App;
