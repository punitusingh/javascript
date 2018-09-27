import {TITLES, NEW_TITLE} from "../actions/index";


export default (state = [], action)=>{
    let newState=[...state];
    switch (action.type) {
        case TITLES:
            return action.data;
        case NEW_TITLE:
            newState.filter(title=>{
                return title.id === action.data.titleId;
            })[0].newTitle = action.data.title;
            return newState;
        default:
            return newState;
    }
};