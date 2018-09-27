import {
    UPDATE_STEP,
    UPDATE_CURRENT_STEP_VALID_FN,
} from '../actions';

const applicationState={
    currentStepId: 'basicInfo',
    currentStepIndex: 0,
    currentStepTitleId: 'basicInfo',
    currentStepValidFn: ()=>{}
};

export default (state = applicationState, action)=>{
    const newState = {...state};
    switch (action.type){
        case UPDATE_STEP:
            return Object.assign(newState, action.data);
        case UPDATE_CURRENT_STEP_VALID_FN:
            newState.currentStepValidFn=action.data;
            return newState;
        default:
            return newState
    }
};