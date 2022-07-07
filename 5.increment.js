// 증가 & 감소 연산자 Increment & Decrement Operator

let  a = 0;
console.log(a);
a++ //a = a + 1;
console.log(a);

a--;
console.log(a);

console.clear();
// 주의!!!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++; // 변수 값이 a인 0을 먼저 b라는 변수에 0을 보내고 나서 a에 1을 더함 반대로 ++를 앞으로 보내면 b변수에 1이 들어감!
console.log(b);
console.log(a);