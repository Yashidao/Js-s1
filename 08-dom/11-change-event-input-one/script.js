// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    let code;
    let input = document.getElementById("pass-one");
    let counter = 0;

    input.setAttribute("maxlength", 10);

    document.getElementById("pass-one").addEventListener("input", () => {

        code = document.getElementById("pass-one").value;
        code.toString(code);

        counter = code.length;

        document.getElementById("counter").innerText = counter + "/10";

        if (counter > 10) {
            document.getElementById("counter").innerText = "10/10";
        }

    });

})();