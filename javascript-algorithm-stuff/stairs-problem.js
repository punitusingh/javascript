/**
 *
 * One guy can take 1 or 2 or 3 steps at a time.
 * So how many ways he can take n steps.
 *
 *
 */



//suppose n = 6


//111111, 11112, 1122,222

/*




 */



var i=0;
var n=6;
var arr=[];
for(i=0;i<n;i++){
    arr.push(1)
}

console.log(arr);//[1,1,1,1,1,1]

function calculate(arr,d) {
    var newArr=[];
    for(var i=1;i<arr.length;i++){
        if(arr[i-1] + arr[i] === d){
            newArr.push(d);
            i++;
        }else{
            newArr.push(arr[i])
        }
    }
}

function perm(arr){

    calculate(arr,2);
    calculate(arr,3)
}