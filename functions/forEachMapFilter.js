//forEach for문처럼 사용하는 용도
const a = [10, 11, 12, 13, 14, 15];

a.forEach((a, i, arr) => {
  console.log(a * a, i, arr);
});

//map 새로운 배열로 만듦, 값 반환됨
let answerMap = a.map((a, i) => {
  return a * i;
});
console.log(answerMap); //[ 0, 11, 24, 39, 56, 75 ]

//filter
let answerFilter = a.filter((v, i) => {
  return v % 2 === 0;
});
console.log(answerFilter); //[ 10, 12, 14 ]
