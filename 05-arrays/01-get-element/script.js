// 05-arrays/01-get-element/script.js - 5.1: item in array

(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];
let i=0;
    document.getElementById("run").addEventListener("click", () => {

        while(i < 4){
            console.log(fruits[i]);
            i++;
        }

    });
    // your code here

})();
