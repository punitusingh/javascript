import {createStore} from 'redux';
import rootReducer from "../reducers";

const initialState={
    board:[
        {name:'Winnie',
            color:'red',
            tasks:['task 1','task 2']
        },
        {name:'Bob',
            color:'blue',
            tasks:['task 3','task 4']
        },
        {name:'Thomas',
            color:'green',
            tasks:['task 5','task 6']
        },
        {name:'George',
            color:'grey',
            tasks:['task 7','task 8']
        },
    ]
};


export  default createStore(rootReducer, initialState);