import React, { Component } from 'react';
import {connect} from 'react-redux';
import StepNavigation from './StepNavigation';
import StepBreadCrumb from './StepBreadCrumb';
import Error from './Error';
import {updateStepAction,
        newTitleAction,
        titles
    } from '../store/actions';

class WizardComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            error:false
        };

        this.stepIdVsIndexMap={};
        this.props.steps.forEach((step, index)=>{
            if(!this.stepIdVsIndexMap[step.props.titleId]){
                this.stepIdVsIndexMap[step.props.titleId] = index;
            }
        });
        this.totalSteps=this.props.steps.length;

        this.props.setTitles(this.props.titles);

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.navigate = this.navigate.bind(this);
        this.isLastStep = this.isLastStep.bind(this);
    }

    getCurrentStep(){
       return this.props.steps[this.props.currentStepIndex];
    }

    updateErrorState(isError){
        this.setState(state=>({
            error:isError
        }));
    }

    updateTitle(newStepTitleId, newStepId){
        const titleId='contactInfo';
        const title = this.props.titles.filter(title=>{
            return title.id === titleId;
        })[0].title;

        if(newStepTitleId === titleId){
            if(newStepId==='contactInfoBasic'){
                this.props.newTitle({titleId,
                    title:`${title}  Basic`});
            }else{
                this.props.newTitle({titleId,
                    title:`${title}  Advance`});
            }
        }else{
            this.props.newTitle({titleId,
                title:title});
        }
    }

    nextStep(){
        const {currentStepIndex} = this.props;
        if(!this.props.currentStepIsValid()){
            this.updateErrorState(true);
            return;
        }

        if(currentStepIndex < this.totalSteps-1) {
            this.updateErrorState(false);
            const newStepIndex = currentStepIndex + 1;
            const newStepId = this.props.steps[newStepIndex].props.id;
            const newStepTitleId = this.props.steps[newStepIndex].props.titleId;
            this.props.updateStep({currentStepIndex: newStepIndex,
                currentStepId:newStepId,
                currentStepTitleId:newStepTitleId});
            this.updateTitle(newStepTitleId, newStepId);
        }
    }

    prevStep(){
        const {currentStepIndex} = this.props;

        if(currentStepIndex > 0) {
            this.updateErrorState(false);
            const newStepIndex = currentStepIndex - 1;
            const newStepId = this.props.steps[newStepIndex].props.id;
            const newStepTitleId = this.props.steps[newStepIndex].props.titleId;
            this.props.updateStep({currentStepIndex: newStepIndex,
                currentStepId:newStepId,
                currentStepTitleId:newStepTitleId});
            this.updateTitle(newStepTitleId, newStepId);
        }
    }

    navigate(currentStepId){
        if(!this.props.currentStepIsValid()){
            this.updateErrorState(true);
            return;
        }
        const currentStepIndex = this.stepIdVsIndexMap[currentStepId];
        const currentStepTitleId = this.props.steps[currentStepIndex].props.titleId;
        this.props.updateStep({currentStepIndex, currentStepId, currentStepTitleId});
        this.updateTitle(currentStepTitleId, currentStepId);
    }

    isLastStep(){
        return (this.totalSteps - 1) === this.props.currentStepIndex;
    }

    isFirstStep(){
        return 0 === this.props.currentStepIndex;
    }

    render() {
        return (
            <div className='wizard-component'>
                <StepBreadCrumb titles={this.props.titles}
                                navigate={this.navigate}
                                currentStepTitleId={this.props.currentStepTitleId}/>
                <Error error={this.state.error}/>
                {this.getCurrentStep()}
                <StepNavigation nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                lastStep={this.isLastStep()}
                                firstStep={this.isFirstStep()}
                />
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
  return {
      currentStepId: state.applicationState.currentStepId,
      currentStepTitleId: state.applicationState.currentStepTitleId,
      currentStepIndex: state.applicationState.currentStepIndex,
      currentStepIsValid: state.applicationState.currentStepValidFn,
      errors: state.errors
  }
};


const mapDispatchToProps=(dispatch)=>{
    return {
        updateStep:(stepDetail)=>{dispatch(updateStepAction(stepDetail));},
        setTitles:(t)=>{dispatch(titles(t));},
        newTitle:(titleObj)=>{dispatch(newTitleAction(titleObj));},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WizardComponent);