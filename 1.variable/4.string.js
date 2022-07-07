// 문자열 타입
let string = "안녕하세요";
string = `안녕 !`;
console.log(string);

// 특수 문자 출력하는 방법
string = '"안녕하세요 !"';
console.log(string);

string = '안녕!\ngwan!\t\t내 이름은\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Tamplate Literla)
let id = 'gwan';
let greetings = "'안녕!," + id + "👍\n공부 다시 열심히 좀 하자!!'";
console.log(greetings);

greetings = `'안녕, ${id}👍
화이팅!!!`
console.log(greetings);