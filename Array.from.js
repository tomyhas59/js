const mySet = new Set([1, 2, 3]); //Set(3) { 1, 2, 3 }
const myArray = Array.from(mySet); // [1, 2, 3]

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const myArray2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(myArray2);

const str = "Hello";
const charArray = Array.from(str); // ["H", "e", "l", "l", "o"]

const originalArray = [1, 2, 3];
const copyArray = Array.from(originalArray); // [1, 2, 3]
