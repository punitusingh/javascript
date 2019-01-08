
function swap(arr,i,j) {
    var arr1=arr.slice();
    var temp=arr1[i];
    arr1[i]=arr1[j];
    arr1[j]=temp;

    return arr1;
}

function perm(arr,left,right) {

    var arr2=[arr];

    while (left<right){

        var holder=[];

        for(var i=0;i<arr2.length;i++){

            for(var start=left+1;start<=right;start++){
                var arr1=swap(arr2[i],start,left);

                    holder.push(arr1);

            }

        }

        holder.forEach(function (t) { arr2.push(t); });

        left++;
    }

    console.log(arr2);

}


perm(['a','b','c'],0,2);