function mapScoresToGrades( tests, average ){
    if(tests.length === 0) return [];

    const head = tests[0];
    const tail = tests.slice(1);

    return [ head >= average ? 'A' : 'F' ].concat(
        mapScoresToGrades(tail, average)
    );
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