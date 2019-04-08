/**


sequence(f,g)(x) = g(f(x))

sequence(f1, f2)(x) = f2(f1(x))

sequence(f1, f2)(...args) = f2(f1(...args))


sequence(f1, f2)(x) = (x) => f2(f1(x))


sequence = (f1, f2) => (
    (x) => f2(f1(x))
 )


 sequence = (f1, f2) => (x) => f2(f1(x))

 compose = (f1, f2) => (x) => f1(f2(x))

 */


const sequence2 =  (f1, f2) => (...x) => f2(f1(...x));

const f1 = (a, b) => a + b;

const f2 = a => a * 10;

const f3 = a => `Result : ${a}`;

console.log(sequence2(f1, f2)(2, 3));


const sequence =  (f1, ...fTails) => fTails.reduce(sequence2, f1);

console.log(sequence(f1, f2, f3)(2, 3));