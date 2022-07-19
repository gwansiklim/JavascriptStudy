const x = 0;
const y = 0;
const coordinate = {x, y} // { x: x, y: y }; <-이것의 축약버전
console.log(coordinate);

// key, value의 명칭이 같으면 하나로 통일 되어 사용이 가능하다.
function makeObj(name, age) {
    return {
        name,
        age,
    }
};
