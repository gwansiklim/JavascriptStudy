/** null, undefined 
 * null같은 경우에는 비어있다는 것!
 * undefined같은 경우에는 값이 정해지지 않았다는 것
 * */ 
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태! (undefined)
activeItem = null; // 활성화된 아이템이 없는 상태 (null)

console.log(typeof null);
console.log(typeof undefined);