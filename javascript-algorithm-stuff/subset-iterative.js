

const subset=(str='abc')=>{

   const finalArr=[''];

    for(let i=0;i<str.length;i++){
        const arr=[];
        arr.push(str[i]);//[a]
        for(let j=i+1;j<str.length;j++){ //j=1
            const len=arr.length; //1
            for(let k=0;k<len;k++){ //
                arr.push(arr[k]+str[j]); //ab
            }
        }
        finalArr.push(...arr);
    }


    console.log(finalArr);
};


subset();