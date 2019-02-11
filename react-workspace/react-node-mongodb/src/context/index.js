import React, {Component} from 'react';
import ReactDom from 'react-dom';

const ThemeContext = React.createContext('light');

class App extends Component{

  render(){


    return (
      //if we don't pass dark them from here, ThemedButton will get light one.
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}


function Toolbar(props){
  return (<div>
    <ThemedButton />
  </div>)
}

class ThemedButton extends Component{

  static contextType=ThemeContext;

  render(){
    return(
        <button theme={this.context}/>
    );

  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);