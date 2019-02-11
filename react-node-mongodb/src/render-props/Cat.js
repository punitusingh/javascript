import React from 'react';
import catImg from './cat.jpeg';

export default class Cat extends React.Component{
  render(){
    const mouse = this.props.mouse;
    return (
      <img src={catImg} style={{position:'absolute', left:mouse.x, top:mouse.y}} alt='chasing mouse'/>
    );
  }
}