// 사용예제 1
function sum(a, b) {
    return a + b; // 함수에서 값을 외부로 반환을 하기 위해 return을 사용해야 한다
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
    return `${lastName} ${firstName} ✋`;
}
let lastName = '임';
let firstName = '관식';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));