// speed-loop.js
function main() {
  const cycles = 1000000000;
  let start = Date.now();
  var j;
  for (let i = 0; i < cycles; i++) {
     j=i+1
  }
  console.log("final j is",j);
  let end = Date.now();
  let duration = (end - start) / 1000;
  console.log("JavaScript looped %d times in %d seconds", cycles, duration);
}
main();