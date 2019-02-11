//const readline = require('readline');


// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  console.log('chunk', chunk);
});


process.stdin.on('end', function () {

  console.log('-- END --');
});


// rl.on('line', function (line) {
//     console.log('readable line', line);
// });


// process.stdin.pipe(process.stdout);