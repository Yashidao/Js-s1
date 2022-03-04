// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    let firstCat = new Cat("Skitty", 9);
    let secondCat = new Cat("Pixel", 6);

    document.getElementById("run").addEventListener('click', () => {
        console.log(firstCat, secondCat);
    });
})();
