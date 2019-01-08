/**


 Given an array, arr, we define the following:



 A subarray of arr is an array composed from a contiguous block of arr's elements. For example, the subarrays of arr = [1, 2, 3] are [1], [2], [3], [1, 2], [2, 3], and [1, 2, 3].
 The subarray sum of arr is the sum of the elements of all subarrays of arr. For example, if arr = [1, 2, 3], then the subarray sum is (1) + (2) + (3) + (1 + 2) + (2 + 3) + (1 + 2 + 3) = 20.



 Complete the subarraySum function in the editor below. It has one parameter: an array of integers, arr. The function must return a long integer denoting the subarray sum of arr.


 */


const subArray=function (arr) {

    let i=0;
    let j=0;
    let answers=[];
    while(i<arr.length){
        j=i;
        while(j<arr.length){
            answers.push(arr.slice(i,j+1));
            j++;
        }
        i++;
    }

    console.log(answers);
};




subArray([1,2,4]);
//subArray([1,2,3,4,5]);

