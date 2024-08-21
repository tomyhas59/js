const regex = /[abc]/; //abc 중 하나라도 일치
console.log(regex.test("a")); // true

//문자열에서 숫자 추출
const str = "The price is 123 dollars and 45 cents.";
const numbers = str.match(/\d+/g); //d = [0-9], + : 연속된 숫자 추출
console.log(numbers); // ["123", "45"]

//문자열에서 특정 단어 찾기
const str2 = "The quick brown fox jumps over the lazy dog.";
const pattern = /\bfox\b/i; //i : 대소문자 구분 없음
console.log(pattern.test(str2)); // true

//정수 검증
const integerRegex = /^\d+$/;
console.log(integerRegex.test("12345")); // true
console.log(integerRegex.test("123.45")); // false

//소수 검증
const decimalRegex = /^\d*\.?\d+$/;
console.log(decimalRegex.test("123.45")); // true
console.log(decimalRegex.test("12345")); // true

// /cat/i cat 문자열이 어디에 있든지 상관없이 찾음
console.log("concatenate".match(/cat/i)); // ["cat"]
console.log("catalog".match(/cat/i)); // ["cat"]

// \Bcat\B cat이 다른 문자에 의해 둘러싸여 있어야 찾음
console.log("concatenate".match(/\Bcat\B/i)); // ["cat"]
console.log("catalog".match(/\Bcat\B/i)); // null
