
class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}



class BinaryTree{
    constructor(){
        this.root=null;
        this.counter=0;
    }

    insert(value,root){

        if(!this.root){
            this.root=new Node(value);
            return;
        }

        if(!root){
           return new Node(value);
        }

        if(value <= root.value){
            root.left=this.insert(value,root.left);
        }else{
            root.right=this.insert(value,root.right);
        }

        return root;

    }



    insertAll(items){
        items.forEach(item=>{
            this.insert(item,this.root);
            console.log("counter",this.counter);
        });
    }

    inOrder(){
        this._inOrder(this.root);
    }

    _inOrder(node){
        if(!node){return;}
        this._inOrder(node.left);
        console.log(node.value);
        this._inOrder(node.right);
    }

    preOrder(){
        this._preOrder(this.root);
    }

    _preOrder(node){
        if(!node){return;}
        console.log(node.value);
        this._preOrder(node.left);
        this._preOrder(node.right);
    }

    postOrder(){
        this._postOrder(this.root);
    }

    _postOrder(node){
        if(!node){return;}
        this._postOrder(node.left);
        this._postOrder(node.right);
        console.log(node.value);
    }

    print(){

        this._print(this.root);

    }

    _print(node){
        if(!node){return;}
        console.log(node.value);
        const child=[];
        if(node.left){
            child.push(node.left.value);
        }
        if(node.right){
            child.push(node.right.value);
        }
        console.log(child);
        this._print(node.left);
        this._print(node.right);
    }


    leaves(){
        this._leaves(this.root);
    }

    _leaves(node){
        if(!node){return;}

        if(!node.left && !node.right){
            console.log(node.value);
        }

        this._leaves(node.left);
        this._leaves(node.right);
    }

    branches(){
        this._branches(this.root);
    }

    _branches(node){
        if(!node){return;}

        if(node.left || node.right){
            console.log(node.value);
        }

        this._branches(node.left);
        this._branches(node.right);
    }

    reverse(){
        this._reverse(this.root);
    }

    _reverse(node){
        if(!node){return;}
        this._reverse(node.right);
        console.log(node.value);
        this._reverse(node.left);
    }
}


const bst=new BinaryTree();
bst.insertAll([3,5,1,6,8,7,2,4]);
console.log("---- tree ---------");
bst.print();
 console.log("------- in order ------------");
 bst.inOrder();
 console.log('-------- pre order ---------');
 bst.preOrder();
 console.log('--------- post order -----------');
 bst.postOrder();
 console.log('--------- leaves -----------');
// bst.leaves();
// console.log('--------- branches -----------');
// bst.branches();
// console.log('--------- reverse -----------');
// bst.reverse();

