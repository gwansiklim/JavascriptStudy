// 불리언 타입 (참, 거짓)
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예제: 참, 거짓을 나타낼 때에는 변수앞에 is를 붙여주는 것이 좋다!
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
console.log(!!0); // !!두개를 붙이면 참인지 거짓인지 나타나게 해준다.
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);