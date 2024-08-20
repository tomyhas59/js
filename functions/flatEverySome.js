const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, [8, 9]],
];

console.log(arr.flat()); // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ] flat(1)과 같음
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] n단계의 배열 품

console.log(arr.flat().every((v) => v)); //모두 존재하면 true
arr[0][2] = "";
console.log(arr.flat().every((v) => v)); //false

console.log(arr.flat().some((v) => v)); //하나라도 존재하면 true

const array = [1, "hello", null, undefined, false];

console.log(array.some((v) => v === null)); //true
