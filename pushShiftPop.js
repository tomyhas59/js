//배열 추가 및 수정

const array = ["a", "b", "c"];

array.push("d"); //배열의 뒤에 추가

console.log(array); //["a", "b", "c", "d"];

array.unshift("0"); //배열의 앞에 추가

console.log(array); //[ '0', 'a', 'b', 'c', 'd' ]

array[3] = "씨"; //3번째 인덱스 수정

console.log(array); //[ '0', 'a', 'b', '씨', 'd' ]

array.shift(); //앞의 배열 제거

console.log(array); //[ 'a', 'b', '씨', 'd' ]

array.pop(); //뒤의 배열 제거

console.log(array); //[ 'a', 'b', '씨']

array.splice(1, 1); //1번째 인덱스에서 1개 지움
//array.splice(1) 1번째 인덱스부터 뒤로 다 지움
//array 원본도 수정됨
console.log(array); //[ 'a', '씨' ]

array.splice(1, 1, "추", "가"); //1번째 인덱스에서 1개 지우고 "추", "가"  추가
console.log(array); //[ 'a', '추', '가' ]

array.splice(2, 0, "끼우기");
//2번재 인덱스 자리에 "끼우기" 추가
console.log(array); //[ 'a', '추', '끼우기', '가' ]

const lotto = Array(45)
  .fill()
  .map((v, i) => i + 1);
console.log(lotto); //[1 , 2, 3, ~ 44, 45]
