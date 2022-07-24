const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // 최대 값
console.log(Number.MIN_VALUE); // 최소 값
console.log(Number.MAX_SAFE_INTEGER); // 안전하게 사용할 수 있는 최대 값
console.log(Number.MIN_SAFE_INTEGER); // 안전하게 사용할 수 있는 최소 값
console.log(Number.NaN); // 숫자가 아닌 것
console.log(Number.NEGATIVE_INFINITY); // 무한
console.log(Number.POSITIVE_INFINITY); // - 무한

// 사용 예제
if (num1 === NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {

}

// 지수 표기법 (매우크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2로 나오는데 이때 e+2는 10의 2승이라는 뜻을 가졌음. ===  1.02x10의 2승

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString()); //문자열로 변환
console.log(num4.toLocaleString('ar-EG')); // 다른 나라의 숫자 표기법

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수가 표기가 안될때는 지슈표기법으로 나타낸다.


if (Number.EPSILON > 0 || Number.EPSILON < 1) {
    console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자.
}

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
    return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));