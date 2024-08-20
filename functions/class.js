/* class Chicken {
  static brand = "우자치킨"; //"static" 쓰면 class에서 호출 가능
  menu = { 후라이드: 10000, 양념치킨: 12000 }; //static 안 쓰면 변수에서 호출
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
  order(name) {
    return `${this.menu[name]}원입니다`;
  }
}

const chain = new Chicken("강남", 4);

console.log(chain.introduce()); //안녕하세요. 강남 4호점입니다
console.log(Chicken.brand); //우자치킨
console.log(chain.order("양념치킨"));

class NewChicken extends Chicken {
  #word = "";
  constructor(name, no, word) {
    super(name, no); //super : 부모의 name, no를 호출
    this.#word = word;
  }
  introduceWithNew() {
    return super.introduce() + " " + this.#word;
  }
  order(name) {
    return super.order(name) + " " + this.#word;
  }
}

const newChicken = new NewChicken("구로", 2, "깔깔깔");
console.log(newChicken.introduceWithNew()); */

/* class Employee {
  #name = ""; //정보 은닉화
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

const Emp1 = new Employee("김용철", 33); */

/* console.log(Emp1.name, Emp1.age);

class Bird {
  wings = 2;
}

class Eagle extends Bird {
  claws = 2;
}

class Penguin extends Bird {
  swim() {
    console.log("수영중...");
  }
}

class EmperorPenguin extends Penguin {
  size = "XXXL";
}

const peng1 = new EmperorPenguin();
console.log(peng1.swim());
 */

