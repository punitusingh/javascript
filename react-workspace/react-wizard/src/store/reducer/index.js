import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import titlesReducer from './titlesReducer';
import applicationStateReducer from './applicationStateReducer';



export default combineReducers({
    data: dataReducer,
    titles: titlesReducer,
    applicationState: applicationStateReducer
});
