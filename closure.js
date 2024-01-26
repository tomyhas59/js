//function scope
function myFunction() {
  let num = 42;
  console.log(num);
}
myFunction(); // 42

//closure

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log("Counter reset");
  }

  return {
    increment,
    reset,
  };
}

let counter = createCounter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.reset(); // Output: Counter reset
