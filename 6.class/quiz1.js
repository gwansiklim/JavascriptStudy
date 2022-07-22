// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기.
// Counter 클래스 만들기

class Counter {
    #value; // 외부에서 값을 변경하지 못하게 하기.
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0) { // 초기값 startValue가 숫자가 아니거나 0보다 작으면
            this.#value = 0; // 값을 0으로 고정
        } else { // 그게 아니라면 숫자가 카운트 되게 한다.
            this.#value = startValue;
        }
    }
    get value() {
        return this.#value;
    }
    increment = () => { //숫자를 증가 시키는 함수
        this.#value++;
    }
}
const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);