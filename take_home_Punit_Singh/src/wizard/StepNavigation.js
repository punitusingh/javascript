import React from 'react';

export default function StepNavigation(props){
        return (
            <div className='step-navigation'>
                 <button className={'step-navigation-item prev' + (props.firstStep ? ' disabled':'')} onClick={props.prevStep}>Previous Step</button>
                {!props.lastStep && <button className='step-navigation-item next' onClick={props.nextStep}>Next Step</button>}

                {props.lastStep && <button className='step-navigation-item finished'>Thank You!</button>}
            </div>
        );
}