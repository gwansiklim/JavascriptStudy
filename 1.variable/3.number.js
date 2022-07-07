let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); //NaN (Not a Number)

let bigInt = 123456789012345678901234567890n; // 웬만하면 엄청큰 숫자들은 사용하지 않는다.
console.log(bigInt);