// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // delete 1 et end

    // 1 banana
    // end kiwi

    document.getElementById("run").addEventListener("click", () => {

        fruits.pop();
        fruits.shift();
       // console.log(fruits);
        fruits.unshift("banana");
        fruits.push("kiwi");
        console.log(fruits);

    });

})();
