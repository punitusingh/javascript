import {
    UPDATE_BASIC_INFO,
    UPDATE_CONTACT_INFO_BASIC,
    UPDATE_CONTACT_INFO_ADVANCE,
    UPDATE_JOB_PREFERENCE,
} from '../actions';

const dataInitialState={
    basicInfo:{
        firstName:'',
        lastName:'',
    },
    contactInfo:{
        basic:{
            email:'',
            phone:''
        },
        advance:{
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
        }
    },
    jobPreference:{
        location:''
    },
};

export default (state = dataInitialState, action) => {
    let newState=Object.assign({},state);
    switch (action.type) {
        case UPDATE_BASIC_INFO:
            Object.assign(newState.basicInfo, action.data);
            return newState;
        case UPDATE_CONTACT_INFO_BASIC:
            Object.assign(newState.contactInfo, {basic:action.data});
            return newState;
        case UPDATE_CONTACT_INFO_ADVANCE:
            Object.assign(newState.contactInfo, {advance:action.data});
            return newState;
        case UPDATE_JOB_PREFERENCE:
            Object.assign(newState, {jobPreference:action.data});
            return newState;
        default:
            return newState;
    }
};
