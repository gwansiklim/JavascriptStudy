// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = { 
    name: 'apple',
    'hello-bye': '✋', // 문자열로 key값을 사용하면 특수문자도 사용 가능 하지만 웬만하면 name: 'apple' 처럼 사용하는 것이 좋다!
    0: 1,
    ['hello-bye1']: '✋',
};

// 속성, 데이터에 접근하기 위해서는
apple.name // 마침표 표기법 dot notation
console.log(apple['hello-bye']); // 대괄호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;

console.log(apple);

