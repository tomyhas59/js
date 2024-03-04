//Array.from은 얕은 복사

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const myArray2 = Array.from(arrayLike); // ['a', 'b', 'c']

const str = "Hello";
const charArray = Array.from(str); // ["H", "e", "l", "l", "o"]
console.log(charArray.at(1)); //e

const num = 12345;
//정수를 배열로 변환
const numArr = Array.from(num.toString(), Number); //[ 1, 2, 3, 4, 5 ]
console.log(numArr);

const originalArray = [1, 2, 3];
const copyArray = Array.from(originalArray); // [1, 2, 3]

const arrOf = Array.of(1, 2, 3); //[ 1, 2, 3 ]
const arr = Array(1, 4, 5); //[ 1, 4, 5 ]
const length = arr.push(50); //arr의 길이 반환

//[1, 4, 5, 50]
console.log(arr.fill(3, 2)); //채울 값, ~부터 [ 1, 4, 3, 3 ]
console.log(arr.fill(25, 1, 2)); //채울 값, ~부터, ~ 전까지 [ 1, 25, 3, 3 ]
