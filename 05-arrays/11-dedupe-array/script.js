// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    let arr = [];

    document.getElementById("run").addEventListener("click", () => {

        fruits.forEach((element) => {
            if (!arr.includes(element)) {
                arr.push(element);
            }
        });

        console.log(fruits);
        console.log(arr);
        
    });

})();
