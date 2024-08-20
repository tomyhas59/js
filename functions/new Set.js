const mySet = new Set(); //중복값 제거하거나 고유한 값 남길 때 씀
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.delete(2);
mySet.has(1); // true
mySet.has(2); // false
mySet.size; // 2 (2개의 값이 저장됨)
//mySet.clear(); //빈 Set로 만듦

mySet.forEach((value) => {
  console.log(value);
});
let a = Array.from(mySet); //Set의 값을 배열로 변환
console.log(a);
