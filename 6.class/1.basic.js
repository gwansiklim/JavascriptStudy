// 객체를 손쉽게 만들수 있는 템플릿
// 1. 생성자 함수를 이용 (오래된 고전적인 방법)
// 2. 최근에는 클래스를 사용 ✨

// 생성자 함수 👇
// function Fruit(name, emoji) {
//     this.name = name;
//     this.emoji = emoji;
//     this.display = () => {
//         console.log(`${this.name}: ${this.emoji}`);
//     };
//     // return this; // 생략 가능
// }

// const apple = new Fruit('apple', '🍎')
// const orange = new Fruit('orange', '🍊')

// console.log(apple);
// console.log(orange);
// console.log(apple.name);
// console.log(apple.emoji);
// apple.display();

// calss로 변경
class Fruit{
    constructor(name, emoji) { //생성자: new 키워드로 객체를 생성할때 호출되는 함수
        this.name = name;
        this.emoji = emoji;
    };
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

// apple은 Fruit은 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎')
// orange는 Fruit은 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊')

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'gwan' };