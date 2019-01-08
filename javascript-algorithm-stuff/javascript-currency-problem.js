
function divideInTwo(dc){
    
    var first=[];

    var total=dc.reduce(function (a,c) {
        return a+(c[0]*c[1]);
    },0);

    var half=Math.floor(total/2);

    var ci=0;

    while(half>0 && dc.length > ci){

      var curr=dc[ci][0];

      if(half>=curr){
        var notes=0;
        while(half >= curr && notes < dc[ci][1]){
            half = half - curr;
          notes++;
        }

        first.push([curr,notes]);

      }
        ci++;

    }




    var j=0,i=0;
    var second=[];
    for( i=0;i<dc.length;i++){
      second.push(dc[i]);
    }

    for( i=0;i<first.length;){
      if(second[j][0] === first[i][0]){

        if(second[j][1] >= first[i][1]){
            second[j][1]=second[j][1] - first[i][1];
        }
        j++;
        i++;
      }else{
        j++;
      }
    }

    return [first,second];
    
}

divideInTwo([[20, 2],[10, 5]]);