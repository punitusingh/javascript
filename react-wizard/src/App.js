import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import WizardComponent from './wizard/WizardComponent';
import BasicInfo from './components/BasicInfo';
import ContactInfoBasic from './components/ContactInfoBasic';
import ContactInfoAdvance from './components/ContactInfoAdvance';
import JobPreference from './components/JobPreference';
import Review from './components/Review';




class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">

        <WizardComponent titles={[
            {id:'basicInfo', title:'Basic Information'},
            {id:'contactInfo', title:'Contact Information'},
            {id:'jobPreference', title:'Job Preference'},
            {id:'review', title:'Thank you for your information'},
        ]}

         steps={[
             <BasicInfo titleId='basicInfo' id='basicInfo' />,
             <ContactInfoBasic titleId='contactInfo'  id='contactInfoBasic'/>,
             <ContactInfoAdvance titleId='contactInfo' id='contactInfoAdvance'/>,
             <JobPreference titleId='jobPreference' id='jobPreference'/>,
             <Review titleId='review' id='review'/>
         ]}
        />
      </div>
    );
  }
}


export default App;