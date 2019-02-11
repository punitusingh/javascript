import React, {Component} from 'react';


//Using props.children as containment
export  default function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
