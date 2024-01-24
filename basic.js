let n = "name";

const user = {
  [n]: "mike",
};
console.log(user); //{ name: 'mike' }

const user2 = Object.assign({}, user); //user 얕은 복사

user2.name = "Tom";

console.log(user2);

//호출 방법
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 3, 5));
console.log(add.apply(null, [3, 5]));
console.log(add.bind(null, 3, 5)());
