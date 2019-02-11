import React, {Component} from 'react';

import FancyBorder from './FancyBorder';

import './welcomeDialog.css';



export default function WelcomeDialog() {

  return (

    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>

  );
}