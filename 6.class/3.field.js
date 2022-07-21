// 접근제어자 (외부에서 변경이 불가능 하게 만드는 법) - 캡슐화 할 수 있음.
// private(#), public(기본적으로 사용), protected
class Fruit{
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
        this.#name = name;
        this.#emoji = emoji;
    };
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    }
}

const apple = new Fruit('apple', '🍎')
apple.name = '오렌지'; // #을 붙인 field는 외부에서 접근이 불가능함
console.log(apple);
