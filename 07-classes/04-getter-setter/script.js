// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get name() {
            return this.firstName + " " + this.lastName;
        }
        set name(otherName) {
            const arr = otherName.split(' ');
            this.firstName = arr[0];
            this.lastName = arr[1];

        }
    }



    document.getElementById("run").addEventListener('click', () => {
        let person = new Person("Tran", "Kevin");
        console.log(person);
        person.name = "Jean Charles";
        console.log(person.name);
    });

})();
