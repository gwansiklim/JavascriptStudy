// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다 💩
// 싱태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환헤야 함 ✨
// 원시값 - 값에 의한 복사가 가능
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
    num = 5; // ❌
    console.log(num);
};
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
    obj.name = 'Bob'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하면 안된다.
    console.log(obj);
};
const sigi = { name: 'gwam' };
displayObj(sigi);
console.log(sigi);

function changeName(obj) { // 함수 내부에서 부터 바꿔야 한다면 함수 이름부터 변경하는 느낌을 주도록 한다!
    return { ...obj, name: 'Bob' }; // 반환 할때는 새로운 오브젝트 만들어준다.!
}