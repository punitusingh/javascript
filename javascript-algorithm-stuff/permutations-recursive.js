
function swap(arr,i,j) {
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

}

function permuation(arr,left,right) {
    if(left===right) {
        console.log(arr);
        return;
    }


    for(let start=left;start<=right;start++){
        swap(arr,start,left);
        permuation(arr,left+1,right);
        swap(arr,start,left);//back to original
    }

}


permuation(['a','b','c'],0,2);