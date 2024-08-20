const array = [1, 3, 2, 4, 7, 6, 5, 8];

console.log(array.slice(3, 6)); //[ 4, 7, 6 ]  array 원본 그대로 유지
console.log(array.slice(3, -3)); //[ 4, 7 ] 두 번째 인수인 -3까지 자름

array.sort((a, b) => {
  return a - b; // 오름차순
});
//array 원본 배열 바꿈
console.log(array); //[ 1, 2, 3, 4, 5, 6, 7, 8]

array.slice().sort((a, b) => {
  return b - a; // 내림차순
});
//array.slice()를 하면 원본 배열 복사 후 사용 가능
console.log(array.slice());

const fruit = ["apple", "grape", "banana", "watermelon", "orange"];

const up = fruit.slice().sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());
//const up = fruit.slice().sort((a, b) => a.localeCompare(b));
console.log(up);
