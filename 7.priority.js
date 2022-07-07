let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result);
result = a++ + b * 4;
console.log(result);

result = (a + b) * 4; // 괄호를 우선순위를 사용하면 괄호안에 있는것을 먼저 계산하고 뒤의 숫자를 계산을 한다.
console.log(result);

result = ((a + b) * 4) / 5
console.log(result);