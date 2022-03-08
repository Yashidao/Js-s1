// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        constructor(name){
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal {
        static greeting = "Miaw"
        constructor(props) {
            super(props);
        }
    }
    class Dog extends Animal {
        static greeting = "Woof"
        constructor(props) {
            super(props);
        }
    }
    document.getElementById("run").addEventListener('click', () => {
        let myCat = new Cat("Beemo");
        let myDog = new Dog("Pako");
        console.log(myCat.sayHello());
        console.log(myDog.sayHello());
    });
})();
