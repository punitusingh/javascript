import StateNode from './StateNode';

export default class StateMachine{
    constructor(props){
        const flattenSteps=StateMachine.flatSteps(props);
        this.buildState(flattenSteps);
        this.currentStep=this.head;
    }

    static flatSteps(props){
        const steps = props.children;
        const stepLength=steps.length;
        const flattenSteps=[];

        for(let i=0;i<stepLength;i++){
            if(steps[i].props.children.length>1){
                for(let j=0;j<steps[i].props.children.length;j++){
                    const step=steps[i].props.children[j];
                    flattenSteps.push({id: steps[i].props.id, step});
                }
            }else{
                flattenSteps.push({id:steps[i].props.id, step:steps[i]});
            }
        }

        return flattenSteps;
    }

    buildState(flattenSteps){
        this.head = new StateNode(flattenSteps[0].id, flattenSteps[0].step);
        let tail=this.head;
        for(let i=1;i<flattenSteps.length;i++){
            tail.next=new StateNode(flattenSteps[i].id, flattenSteps[i].step);
            tail.next.prev = tail;
            tail = tail.next;
        }
    }

    nextStep(){
        this.currentStep=this.currentStep.next;
        return this.currentStep;
    }

    prevStep(){
        this.currentStep=this.currentStep.prev;
        return this.currentStep;
    }

    isLastStep(){
        return  !this.currentStep.next
    }

    isFirstStep(){
        return !this.currentStep.prev;
    }

    getStepById(id){
        let start=this.head;
        if(this.currentStep.id === id){return this.currentStep;}

        while(start){
            if(start.id===id){
                this.currentStep=start;
                return this.currentStep;
            }
            start=start.next;
        }

        return undefined;
    }

}