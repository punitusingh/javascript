import React from 'react';

import Mouse from './Mouse';
import Cat from './Cat';

export default  class MouseTracker extends React.Component{


  constructor(props){
    super(props);

    this.handleMouseMove=this.handleMouseMove.bind(this);
    this.state = {x:0, y:0};

  }


  handleMouseMove(event){
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }


  render(){
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }

}