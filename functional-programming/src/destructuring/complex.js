


let right = {
    first: 'first',
    last: 'last',
    languages: [ 'JavaScript', 'Java', 'Prolog']
};


const { first, languages: [ , ...langTail] } = right;

console.log( first, langTail );