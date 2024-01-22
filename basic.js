let n = "name";

const user = {
  [n]: "mike",
};
console.log(user); //{ name: 'mike' }

const user2 = Object.assign({}, user); //user 얕은 복사

user2.name = "Tom";

console.log(user2);

