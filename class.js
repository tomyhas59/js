class Chicken {
  static brand = "우자치킨"; //static 쓰면 class에서 호출 가능
  static contact() {
    return `${this.brand}입니다. 무엇을 도와드릴까요?`;
  }

  constructor(name, no) {
    this.name = name;
    this.no = no;
  }

  introduce() {
    return `안녕하세요. ${this.name} ${this.no}호점입니다`;
  }
}

const chain = new Chicken("강남", 4);

console.log(chain.introduce()); //안녕하세요. 강남 4호점입니다
console.log(Chicken.brand); //우자치킨

class Employee {
  #name = "";
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name[0] + "모 씨";
  }
  get age() {
    return this.#age - (this.#age % 10) + "대";
  }
  set age(age) {
    if (typeof age === "number" && age > 0) this.#age = age;
  }
}

const Emp1 = new Employee("김용철", 33);

console.log(Emp1.name, Emp1.age);
