const myMap = new Map();

myMap.set("key1", "value1");
console.log(myMap.get("key1")); //key에 해당하는 value 값을 반환

console.log(myMap.has("key1")); //존재하면 true , value값은 has로 못 불러옴

console.log(myMap.delete("key1")); //삭제할 게 없으면 false

console.log(myMap.size); //위에서 삭제해서 아무것도 없으므로 0

myMap.set("key2", "value2");
myMap.set("추가 키", "추가 밸류");

myMap.forEach((value, key) => {
  console.log(key, value);
});

//myMap.clear(); //빈 Set로 만듦
