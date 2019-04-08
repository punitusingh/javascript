const getMinMax = ( (ranges = []) => {
    let min = Number.MAX_VALUE;
    let max = 0;
// Loop to find min and max
// Complexity O(n) where n is number of zip code ranges.
    for (let range of  ranges) {
        if (range.length === 2 && Number.isInteger(range[0]) && Number.isInteger(range[1])) {
            min = Math.min(min, range[0]);
            max = Math.max(max, range[1]);
        } else {
            throw 'Invalid input of zip code ranges';
        }
    }
    return [min, max];
});

const getRangeFlag = ( (ranges, min, max) => {
    const setArray = new Array(max - min + 1);

    ranges.forEach((range) => {
        let start = range[0] - min;
        const end = range[1] - min;
        while (start <= end) {
            setArray[start] = 1;
            start++;
        }
    });

    return setArray;
});

const calculateRange = ( (zipRangeEvaluationArray, min) => {
    const range = [];
    let leftRange = min - 1;
    let rightRange = min;
// Loop through the Evaluation Array once and create the final required Zip Code Restriction Ranges by creating a range for every undefined found in the array, and at the end populate the remaining range boundaries as the final restriction range.
// Complexity is a constant O(c) where c in worst case would be 99999.
    for (let i = 0; i < zipRangeEvaluationArray.length; i++) {
        //if value missing means out of range, keep increasing left boundary
        if (!zipRangeEvaluationArray[i]) {
            leftRange = min + i;
        }

        //if value is present, means in the range, keep increasing right boundary
        if (zipRangeEvaluationArray[i] === 1) {
            rightRange = min + i;
        }

        //if value is present, but next value is missing means end of a range reached, create a new range and collect it
        if (zipRangeEvaluationArray[i] === 1 && !zipRangeEvaluationArray[i + 1]) { // Time to populate Zip Code Restriction Range Array
            range.push([leftRange + 1, rightRange]);
        }
    }
    return range;
});

const zipCodeRangeRegistriction = (zipCodeRanges = []) => {
    if (zipCodeRanges.length === 0) return [];

    // Loop to find min and max
    // Complexity O(n) where n is number of zip code ranges.
    const [min, max] = getMinMax(zipCodeRanges);
    //console.log(`min is %d and max is %d`, min, max);
    // Initialize an array of max - min length
    if (min === Number.MAX_VALUE && max === 0) {
        return [];
    }

    // Populate 1 in the Evaluation Array for a value derived from zip code ranges by subtracting the min.
    // For example, if zip code range is [10, 15] and min is 10, Populate 1 for 0th, 1st, 2nd, 3rd, 4th values in array as we loop through 0 (10 - min) to 5 (15 - min) new range value would be [0,5]
    // Complexity O (n) where n is number of zip code ranges. Worst case scenario would be 99999 * O (n) which is treated as O(n).
    const zipRangeEvaluationArray = getRangeFlag(zipCodeRanges, min, max);
    return calculateRange(zipRangeEvaluationArray, min);
};


console.log(zipCodeRangeRegistriction([[94133, 94133], [94226, 94399], [94200, 94299]]));
console.log(zipCodeRangeRegistriction([[94133, 94133], [94200, 94299], [94600, 94699]]));
console.log(zipCodeRangeRegistriction([[4, 4], [6, 7], [10, 10], [12, 13], [15, 15]]));