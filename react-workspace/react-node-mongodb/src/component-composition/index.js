import React, {Component} from 'react';
import ReactDom from 'react-dom';


import Containment from './Containment';
import Specialization from './Specialization';
import CompositionWithClasses from './CompositionWithClasses';

ReactDom.render(
  <div className='composition'>
    <Containment className='composition-containment'/>
    <Specialization className='composition-specialization'/>
    <CompositionWithClasses className='composition-with-classes'/>
  </div>,
  document.getElementById('root')
);