import React from 'react';
import './splitPane.css';

//Multiple holes for containment

function SplitPane(props){

  return(
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
  );
}

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

export default function SplitPaneApp() {
  return (
    <SplitPane
      left={
        <Contacts />
      }

      right={
        <Chat/>
      }
    />
  )
}