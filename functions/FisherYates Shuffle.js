const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);

const shuffle = [];

for (let i = candidate.length; i > 0; i -= 1) {
  const random = Math.floor(Math.random() * i);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}
console.log(shuffle);

const winBalls = shuffle.splice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];
console.log(winBalls, bonus);

const candidateW = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffleW = [];
while (candidateW.length > 0) {
  const random = Math.floor(Math.random() * candidateW.length);
  const spliceArray = candidateW.splice(random, 1);
  const value = spliceArray[0];
  shuffleW.push(value);
}
console.log(shuffleW);
