const array = ["a", "b", "c"];

const result = array.includes("a");
console.log(result); //있으면  true

const result1 = array.indexOf("a");
console.log(result1); //a의 인덱스 번째 수 0
//indexOf("a", 1) 1번 인덱스부터 찾은 값을 반환

const result2 = array.lastIndexOf("a");
console.log(result2); //뒤에서 a의 인덱스 번째 수 0

const result3 = array.indexOf("d");
console.log(result3); //없으면 -1

const arr = ["가", "라", "다", "라", "마", "라"];

let index = arr.indexOf("라");
while (index > -1) {
  arr.splice(index, 1);
  index = arr.indexOf("라");
}

console.log(arr);
