import {MOVE_LEFT, MOVE_RIGHT, ADD_ITEM} from "../actions/action-types";


function move(state, fromColumn, toColumn, taskIndex){
    const board=[...state.board];
    board[fromColumn]={...board[fromColumn]};
    board[fromColumn].tasks=[...board[fromColumn].tasks];
    board[toColumn]={...board[toColumn]};
    board[toColumn].tasks=[...board[toColumn].tasks];
    const task= board[fromColumn].tasks.splice(taskIndex, 1)[0];
    board[toColumn].tasks.push(task);
    console.log({board}, state);
    return {board};
}


export default function rootReducer(state, action){
    if(action.type===MOVE_RIGHT){
        const {columnIndex, taskIndex} = action.payload;
        return move(state, columnIndex, columnIndex+1, taskIndex);
    }else if(action.type===MOVE_LEFT){
        const {columnIndex, taskIndex} = action.payload;
        return move(state, columnIndex, columnIndex-1, taskIndex);
    }else if(action.type===ADD_ITEM){
        const {columnIndex, item}=action.payload;
        const board=[...state.board];
        board[columnIndex] = {...board[columnIndex]};
        board[columnIndex].tasks = [...state.board[columnIndex].tasks];
        board[columnIndex].tasks.push(item);
        return {board};
    }
    return state;
}
