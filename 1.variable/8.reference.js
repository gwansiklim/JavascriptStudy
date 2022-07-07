// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {  // 메모리 주소인 0x1234에 저장됨
    name: '사과',
}
let orange = apple; // 같인 메모리 주소인 0x1234 복사가 됨 
orange.name = '오렌지';
// 복사된 메모리에서 정보가 바뀌면 기존에 있는 메모리에 있는 정보도 바뀜
console.log(apple);
console.log(orange);