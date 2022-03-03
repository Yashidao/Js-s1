// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    let pets = {};

    document.getElementById("run").addEventListener('click', () => {

        keys.forEach((key, value)=> pets[key] = values[value]);

        console.log(pets)

        Object.entries(pets).forEach(([key, value])=> console.log(`${key}: ${value}`));

    });

})();
