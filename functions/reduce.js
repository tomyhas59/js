const arr = [1, 2, 3, 4].reduce(
  (a /*누적값 */, c /*배열값 */) => a + c /*다음 누적값 */,
  0 /*초기값*/
  /*
  0, 1 
  1, 2
  3, 3
  6, 4
  return 10
  */
);
console.log(arr);
const arr2 = [1, 2, 3, 4].reduce((a, c) => a + c); //초기값 없을 때 첫 번째가 초기값
/*
1, 2 
3, 3
6, 4
return 10
*/
console.log(arr2);

//평균 구하기
const records = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const average = records.reduce((a, c) => a + c) / records.length;
console.log(average);

//배열을 객체로 바꾸기
const array = ["철수", "영희", "현영", "한솔"].reduce((a, c, i) => {
  a[i + 1] = c;
  return a;
}, {});
/*
{} "철수" 0
{1 : "철수" } 영희 1 
{1 : "철수", 2 : "영희"} 현영 2 
{1 : "철수", 2 : "영희", 3 : "현영"} 한솔 3 
{1 : "철수", 2 : "영희", 3 : "현영", 4 : "한솔"} 
*/

console.log(array);

//return 옆에 { return  이렇게 있으면 생략 가능
const empty = {};
empty[0] = "철수";
empty[2] = "영희";
console.log(empty); //{ '0': '철수', '2': '영희' }
