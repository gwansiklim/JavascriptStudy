// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters라고 부름 a = 1, b = 1 인자에 직접적으로 정보를 줄 수 있지만 외부에서 주는 정보가 우선순위가 됨
function add(a = 1, b = 1) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[1]);
    return a + b;
}
add(1, 2, 3);

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);