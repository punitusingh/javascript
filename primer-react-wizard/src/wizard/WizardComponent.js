import React, { Component } from 'react';
import StepNavigation from './StepNavigation';
import StepBreadCrumb from './StepBreadCrumb';
import StateMachine from './stateMachine/StateMachine';

export default class WizardComponent extends Component{

    constructor(props){
        super(props);

        const stateMachine=new StateMachine(props);

        this.state={
            stateMachine,
            titles:this.getTitles()
        };
    }

    getTitles(){
        return this.props.children.map(x=> ({ id:x.props.id, title: x.props.title}));
    }



    onNext=()=>{

       this.setState({
               currentStep: this.state.stateMachine.nextStep(),
       });

    };

    onPrev=()=>{
        this.setState({
            currentStep: this.state.stateMachine.prevStep(),
        });

    };

    handleOnClickOnBreadCrumb=(id)=>{
        this.setState({currentStep:this.state.stateMachine.getStepById(id)})
    };

    render() {
        const {stateMachine, titles} = this.state;
        const {currentStep} = stateMachine;
        return (
            <div className='wizard-component'>

                <StepBreadCrumb titles={titles}
                                handleOnClick={this.handleOnClickOnBreadCrumb}
                                selected={currentStep.id}/>

                {currentStep.value}

                <StepNavigation
                    onNext={this.onNext}
                    onPrev={this.onPrev}
                    firstStep={stateMachine.isFirstStep()}
                    lastStep={stateMachine.isLastStep()}/>

            </div>
        );
    }
}