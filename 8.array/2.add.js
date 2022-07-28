const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식
fruits[6] = '🍓'; // 이렇게 하게 됫을 경우 결과 값에 [ '🍌', '🍎', '🍇', '🍑', <2 empty items>, '🍓' ] ( <2 empty items> 이런식으로 공란이 생김!) 
console.log(fruits);

delete fruits[1]; // 이것도 마찬가지!
console.log(fruits);