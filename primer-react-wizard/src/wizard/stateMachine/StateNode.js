


export default class StateNode{
    constructor(id,value){
        this.next=undefined;
        this.prev=undefined;
        this.value=value;
        this.id=id;
    }
}