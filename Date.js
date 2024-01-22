const date = new Date();

console.log(date);

console.log(date.getFullYear(), "년"); //현재 연도
console.log(date.getDate(), "일"); // 현재 날짜
console.log(date.getDay(), "요일"); // 현재 요일의 인데스 일~토
console.log(date.getHours(), "시"); //현재 시간
console.log(date.getMonth(), "월"); //현재 달-1
console.log(date.getMinutes(), "분"); //현재 분
console.log(date.getSeconds(), "초"); //현재 초
console.log(date.getTime(), "밀리초"); //현재 밀리초
console.log(date.toLocaleString()); //한글로 표시
