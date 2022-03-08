// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").addEventListener('click', () => {
        let code = document.getElementById("pass-one").value;
        let codeBis = document.getElementById("pass-two").value;
        if (code == codeBis) {
            alert("Your password is correct!");
        }
        else {
            let error = document.getElementById("pass-two");
            error = error.setAttribute("class", "error");
        }
    });

})();
