/**
 *
 * Use higher order function to avoid tail recursion
 *
 * map, reduce
 * */


function mapScoresToGrades( tests, average ){
   let gradeTest = ( testScore ) => (testScore >= average ? 'A' : 'F')

   return tests.map( gradeTest );
}


function getAverage( tests ) {

    return tests.reduce((acc, item) => {
        return acc + item;
    })/tests.length;
}


function gradeTests( tests ){

    const average = getAverage( tests );

    return mapScoresToGrades( tests, average);
}



console.log( gradeTests([ 0.1, 0.5, 1]));


