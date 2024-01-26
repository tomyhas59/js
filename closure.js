//function scope
function myFunction() {
  let num = 42;
  console.log(num);
}
myFunction(); // 42

//closure

function createCounter() {
  let count = 0;

  function addCount() {
    count++;
    console.log(count);
  }
  return addCount;
}

let counter = createCounter();
counter(); //  1
counter(); //  2
