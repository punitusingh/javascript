let i = 0;
let permute = (acc, arr) => {
    let len = arr.length;
    if (arr.length === 0) {
        console.log(acc);
        i++;
        return acc;
    }
    for (let i=0; i<len; i++) {
        let temp = arr.slice(),
            tempAcc = acc;
        tempAcc += temp[i];
        temp.splice(i,1);
        permute(tempAcc, temp);
    }
};

permute('', ['A','B','C']);
console.log(i);

// n! time and space