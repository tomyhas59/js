const monsterList = [
  { name: "슬라임", hp: 25, att: 10 },
  { name: "스켈레톤", hp: 50, att: 15 },
];

const monster1 = JSON.parse(JSON.stringify(monsterList[0])); //깊은 복사
console.log(monster1);
monster1.name = "우자";
console.log(monsterList[0].name, monsterList[0] === monster1); //슬라임, false, 복사한 거여서 바뀌지 않음

const monster2 = monsterList[0]; //참조 바뀜
monster2.name = "우자";
console.log(monsterList[0].name, monsterList[0] === monster2); //우자, true
