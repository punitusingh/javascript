import React, { Component } from 'react';
import './App.css';
import WizardComponent from './wizard/WizardComponent';
import BasicInfo from './components/BasicInfo';
import ContactInfoBasic from './components/ContactInfoBasic';
import ContactInfoAdvance from './components/ContactInfoAdvance';
import JobPreference from './components/JobPreference';
import Step from './wizard/Step';



class App extends Component {
  render() {
    return (
      <div className="App">

        <WizardComponent>

          <Step id='basic-info' title='Basic Information'>
            <BasicInfo/>
          </Step>

          <Step id='contact-info' title='Contact Information'>
            <ContactInfoBasic/>
            <ContactInfoAdvance/>
          </Step>

          <Step id='job-preference' title='Job Preference'>
            <JobPreference/>
          </Step>

        </WizardComponent>

      </div>
    );
  }
}

export default App;
