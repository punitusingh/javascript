/**


 Given a long integer, num, find the number of ways to represent it as a sum of two or more consecutive positive integers. For example:



 If num = 15, then there are three such ways: (1 + 2 + 3 + 4 + 5) = (4 + 5 + 6) = (7 + 8) = 15.
 If num = 2, then there are zero such ways.

 */



const consecutive=function consecutiveSum(n) {
    console.log(`>>>>>>>>>>>>>> for number ${n}`);
    if(n<=2){
        console.log("not possible");
        return;
    }
    const half=parseInt(n/2) +1;//8

    let i=0;
    let j=i+1;//2
    let sum=0;
    let array=[];
    let answer=[];
    while(sum<n && j<=half){//1<15 && 2<=8
        sum = sum + j; //1+2=3
        array.push(j);
        if(sum === n){
            answer.push(array);
            i++;
            j=i+1;
            sum=0;
            array=[];
        } else if(sum > n){
            i++;
            j=i+1;
            sum=0;
            array=[];
        }else{
            j++;
        }
    }

    if(answer.length){
        console.log(answer);
    }else{
        console.log("not possible");
    }

};

consecutive(1);
consecutive(2);
consecutive(3);
consecutive(4);
consecutive(5);
consecutive(6);
consecutive(7);
consecutive(8);
consecutive(9);
consecutive(10);
consecutive(11);
consecutive(12);
consecutive(13);
consecutive(14);
consecutive(15);
consecutive(16);
consecutive(17);
consecutive(18);
consecutive(19);
consecutive(20);
consecutive(21);
consecutive(22);