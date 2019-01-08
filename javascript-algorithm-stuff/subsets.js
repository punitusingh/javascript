var list=['a','b','c'];



//[1],[1,2],[1,2,3],[1,2,3,4]

var binaryMap={};
list.forEach(function(number,index){
    binaryMap[number]=Math.pow(2,index)
});

//console.log(binaryMap);


var end=Math.pow(2,list.length);

//console.log(end);

    for(var p=0;p<end;p++){ //2^n
        var arr=[];

        for(var i=0;i<list.length;i++) { //loop over 'a','b','c','d'

            if ((binaryMap[list[i]] & p ) > 0) { //list[0]='a', binaryMap['a']=1 & 0
                arr.push(list[i]);
            }

        }

        console.log(arr);
    }


