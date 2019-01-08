console.time('timeit');
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// setup the timer
console.time('timer');
setTimeout(function () {
  console.timeEnd('timer'); // Prints much more than 1000ms
}, 1000)

//fibonacci(44);             // modify this number based on your system performance
console.timeEnd('timeit'); // On my system it takes about 9000ms (i.e. 9 seconds)

console.log(__dirname);
console.log(__filename);

console.log(process.argv);