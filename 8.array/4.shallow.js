// 얕은 복사 Shallow Copy - 객체는 메모리 주소에 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어진다.!
// Array.from을 이용해 새로운 배열을 만들거나 기존의 배열을 합치는 concat이용하거나 slice, spread(...), Object.assign
const pizza = { name: '🍕', price: 2, owner: {name: 'gwan'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);