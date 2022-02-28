// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    let arr = document.getElementById("numbers").value;


    document.getElementById("run").addEventListener("click", () => {

        let a = arr.split(",");
        a = a.sort((a,b)=>a-b);
        alert(a);


    });

})();
