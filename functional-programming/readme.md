

## testing functional code is easy
 - as argument values determine output
 - no need of external context or external state
 
 
 
## hard to implement functional programming in javascript
 - need to make deep copy of objects
 
## performance problem
 - recursion
 - memoization
 - lazy evaluation ( )
 - tail call optimization ( not available in all browsers ) 
 
 
http://tinyurl.com/es6-summary


- Array.isArray([])
- typeof [] //'object'

- immutable.js
- Object.freeze()


- rest parameters 
const add = ( ...num ) => { // num is array here }

- destructuring
const [head, ...tail] = [1, 2, 3];