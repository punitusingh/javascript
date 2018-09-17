import React from 'react';

export default function StepNavigation(props){
        return (
            <div className={props.firstStep ? 'step-navigation first-step' : 'step-navigation'}>
                {!props.firstStep &&
                <button className='step-navigation-item prev' onClick={props.onPrev}>Previous Step</button>
                }

                {props.lastStep &&
                <button className='step-navigation-item finished'>Complete</button>
                }

                {!props.lastStep &&
                <button className='step-navigation-item next' onClick={props.onNext}>Next Step</button>
                }
            </div>
        );
}