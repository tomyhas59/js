const array = ["a", "b", "c"];

const result = array.includes("a");
console.log(result); //있으면  true

const str = "안녕Ha세요 그럼 2만";
console.log(str.startsWith("안녕")); //String에서만 가능
console.log(str.endsWith("하세요"));
console.log(str.search(/[0-9]/)); //처음으로 일치하는 인덱스 10
console.log(str.search(/[a-z]/)); // 3

const result1 = array.indexOf("a");
console.log(result1); //a의 인덱스 번째 수 0
console.log(array.indexOf("c", 3)); //n번 인덱스부터 찾은 값을 반환 c를 3번째 인덱스부터 찾는데 값이 없으므로 -1

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

console.log(arr); //[ '가', '다', '마' ]
