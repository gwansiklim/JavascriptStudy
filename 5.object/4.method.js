const apple = {
    name: 'apple',
    display: function () {
        console.log(`${this.name}: ๐`); // ๊ฐ์ฒด ๋ด์์ ์๊ธฐ์์ ์ ๋ฐ์ดํฐ์ ์ ๊ทผํ  ๋์๋ this๋ฅผ ๋ถ์ฌ ์ฌ์ฉํ๋ค.
    },
};

apple.display();