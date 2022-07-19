const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: 🍎`); // 객체 내에서 자기자신의 데이터에 접근할 때에는 this를 붙여 사용한다.
    },
};

apple.display();