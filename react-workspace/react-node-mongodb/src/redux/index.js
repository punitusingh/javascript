import React from "react";
import ReactDom from 'react-dom';
import { createStore } from "redux";


import reducer from "./reducers";
import HelloWorld from "./HelloWorld";

const initialState = {
  tech: "React"
};

const store = createStore(reducer, initialState);

class App extends React.Component{
  render(){
    return <HelloWorld tech={store.getState().tech}/>
  }
}


ReactDom.render(
  <App/>,
  document.getElementById('root')
);