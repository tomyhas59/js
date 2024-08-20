console.log(Math.floor(Math.random() * 9 + 1)); //0이상 10 이하
//floor 내림
//round 반올림
//ceil  올림
//trunc 정수만
const arr = [30, 50, 100, 10];
console.log(Math.min(...arr)); //전개연산자 써야함 최솟값 리턴 10
console.log(Math.min.apply(null, arr)); //apply(null=객체, 배열) 리턴 10

const numbers = [];
for (let n = 0; n < 9; n = n + 1) {
  numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n <= 3; n += 1) {
  const index = Math.floor(Math.random() * numbers.length); //0~8 정수
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);
console.log(numbers);

const join = [1, 2, 3, 4];

console.log(join.join("")); //"" 문자열로 바꿔줌 1234
console.log(join.join("!")); //!가 문자 사이에 생김 1!2!3!4
console.log(join.reverse()); //배열에서 리버스됨 [ 4, 3, 2, 1 ]

const split = "1234";

console.log(split.split()); //배열로 바꿔줌 [ '1234' ]
console.log(split.split("")); //[ '1', '2', '3', '4' ]
console.log(split.split("3")); //3을 기준으로 나뉨[ '12', '4' ]
console.log(split.split("3", 1)); //3을 기준으로 나누고[ '12' ] n개 가져옴

console.log(Math.abs(-13)); //절대값 13
