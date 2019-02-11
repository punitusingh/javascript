import React from 'react';



export default class CustomTextInput extends React.Component{

  constructor(props){
    super(props);

    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput(){
    //current exposes DOM node
    this.textInput.current.focus();
  }

  render(){

    return (
      <div>

        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />

      </div>
    );
  }

}