var list=[1,2,3,4];


function subset(i,arr){

    if(i===list.length){ //0
        console.log(arr);
        return arr;
    }

    arr[i]=undefined;//arr[0]=undefined
    subset(i+1,arr); //(1,[]),(2,[])
    arr[i]=list[i];//arr[0]=1
    subset(i+1,arr);//1


}

//subset(0,[]);



function subsetNew(i,arr,str) {
    arr.push(str[i]);//abcd [a]
    let j=i+1; //j=1
    if(j===str.length){
        arr.push('');
        return;
    }

    const length=arr.length;
    const nextItem=str[j];//b
    for(let k=0;k<length;k++){
        arr.push(arr[k]+nextItem);
    }
    subsetNew(i+1,arr,str);
}
arr=[];
subsetNew(0,arr,"abcd");
console.log(arr);







