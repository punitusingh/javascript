

const [, ...tail] = [ 1, 2, 3];

console.log(tail);

//spreading array
console.log([...tail, ...tail]);

console.log([...tail, ...tail, 4]);


let logHeadTail = ( head, ...tail ) => console.log( head, tail );

logHeadTail(...tail, ...tail);