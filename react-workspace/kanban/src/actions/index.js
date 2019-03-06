import {MOVE_LEFT, MOVE_RIGHT, ADD_ITEM} from "./action-types";

export function moveLeft(payload){
    return {type:MOVE_LEFT, payload}
}

export function moveRight(payload){
    return {type:MOVE_RIGHT, payload}
}

export function addItem(payload){
    return {type:ADD_ITEM, payload}
}