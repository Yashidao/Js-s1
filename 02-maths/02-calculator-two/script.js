
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let A = document.getElementById('op-one').value;
        let B = document.getElementById("op-two").value;
        A = parseFloat(A);
        B = parseFloat(B);
        let C;

        switch (operation) {
            case "addition":
                C = A + B;
                alert("Réponse: " + C);
                break;
            case "substraction":
                C = A - B;
                alert("Réponse: " + C);
            break;
            case "multiplication":
                C = A * B;
                alert("Réponse: " + C);
            break;
            case "division":
                C = A / B;
                alert("Réponse: " + C);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
