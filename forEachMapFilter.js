//forEach for문처럼 사용하는 용도
a = [10, 11, 12, 13, 14, 15];

a.forEach(
  function (a, i) {
    console.log(a * a, i, this /*[3, 4, 5] */);
  },
  [3, 4, 5]
);

//map 새로운 배열로 만듦
let answerMap = a.map((a, i) => {
  return a * i;
});
console.log(answerMap); //[ 0, 11, 24, 39, 56, 75 ]

//filter
let answerFilter = a.filter((v, i) => {
  return v % 2 === 0;
});
console.log(answerFilter);
