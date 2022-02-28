
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function () {
        // perform an addition
        let A = document.getElementById('op-one').value;
        let B = document.getElementById("op-two").value;
        A = parseFloat(A);
        B = parseFloat(B);
        let C = A + B;
        alert("Réponse: " + C);
    });

    document.getElementById("substraction").addEventListener("click", function () {
        // perform an substraction
        let A = document.getElementById('op-one').value;
        let B = document.getElementById("op-two").value;
        A = parseFloat(A);
        B = parseFloat(B);
        let C = A - B;
        alert("Réponse: " + C);
    });

    document.getElementById("multiplication").addEventListener("click", function () {
        // perform an multiplication
        let A = document.getElementById('op-one').value;
        let B = document.getElementById("op-two").value;
        A = parseFloat(A);
        B = parseFloat(B);
        let C = A * B;
        alert("Réponse: " + C);
    });

    document.getElementById("division").addEventListener("click", function () {
        // perform an division
        let A = document.getElementById('op-one').value;
        let B = document.getElementById("op-two").value;
        A = parseFloat(A);
        B = parseFloat(B);
        let C = A / B;
        alert("Réponse: " + C);
    });
})();
