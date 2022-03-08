// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    let code;
    let counter = 0;
    let number = 0;
    let letter;

    document.getElementById("pass-one").addEventListener("input", () => {

        code = document.getElementById("pass-one").value;
        code.toString(code); // transfomre en string

        counter = code.length; // le nombre de caractère

        document.getElementById("validity").innerText = counter + "/8";
        if (counter === 8) {
            for (i = 0; i <= counter; i++) {
                if (isNaN(code[i]) == false) {
                    number++;
                }
                if(number >= 2){
                    console.log(number);
                    document.getElementById("validity").innerText = "OK";
                }
            }
        }



    });


})();
