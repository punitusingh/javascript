
export const UPDATE_STEP='UPDATE_STEP';
export const TITLES='TITLES';
export const NEW_TITLE='NEW_TITLE';
export const UPDATE_CURRENT_STEP_VALID_FN='UPDATE_CURRENT_STEP_VALID_FN';
export const UPDATE_BASIC_INFO='UPDATE_BASIC_INFO';
export const UPDATE_CONTACT_INFO_BASIC='UPDATE_CONTACT_INFO_BASIC';
export const UPDATE_CONTACT_INFO_ADVANCE='UPDATE_CONTACT_INFO_ADVANCE';
export const UPDATE_JOB_PREFERENCE='UPDATE_JOB_PREFERENCE';


export const updateStepAction=(data)=>({type:UPDATE_STEP, data});

export const titles=(data)=>({type:TITLES, data})
export const newTitleAction=(data)=>({type:'NEW_TITLE', data});


export const updateStepValidFn=(data)=>({type:'UPDATE_CURRENT_STEP_VALID_FN', data});

//data actions
export const updateBasicInfo=(data)=>({type:'UPDATE_BASIC_INFO', data});
export const updateContactInfoBasic=(data)=>({type:'UPDATE_CONTACT_INFO_BASIC', data});
export const updateContactInfoAdvance=(data)=>({type:'UPDATE_CONTACT_INFO_ADVANCE', data});
export const updateJobPreference=(data)=>({type:'UPDATE_JOB_PREFERENCE', data});


