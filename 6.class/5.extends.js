// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
//     play() {
//         console.log('놀자~!');
//     }
// }

class Animal {
        constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('잔다!');
    }
}

class Tiger extends Animal { }
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor(color,ownerName) {
        super(color); // super는 상속하고 있는 부모클래스를 가르킨다. (즉, 위에 Animal이라는 클래스를 가르킨다.)
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자아~!');
    }
    // 자식 클래스에서 부모 클래스의 함수를 덮어 씌우는 것을 오버라이딩이라고 한다. (overriding)
    eat() {
        super.eat(); //super을 사용하면 부모클래스의 함수를 호출하고 내가 원했던 행동을 할 수 있게 할 수 있다.
        console.log('강아지가 먹는다!');
    }
}
const dog = new Dog('빨강이', 'Gwan');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();