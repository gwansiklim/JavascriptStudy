// let은 재할당이 가능
let a = 1;
a = 2;

// const는 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수
const MAX_FRUITS = 5; // 상수로 사용할 때에는 대문자로 사용하는 것이 좋다! 그리고 단어사이에는 _를 붙여주는 것이 좋다!

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name : 'apple',
    color : 'red',
    display : "🍎",
};
console.log(apple);

// const에 apple이라는 객체 즉 object를 입력하고 변수(let)와 같이 apple이라는 같은 변수명을 사용하여 object를 만드는 것은 불가능하나
// apple이라는 상수 안에 object의 정보는 변경이 가능하다.
apple.name = 'orange';
apple.display = '🍏';
console.log(apple); 