// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    document.getElementById("run").addEventListener('click', () => {
        let code = document.getElementById("pass-one").value;
        let codeBis = document.getElementById("pass-two").value;
        if (code == codeBis) {
            alert("Your password is correct!");
        }
        else {
            document.getElementById("pass-two").style.borderBlockColor = "red";
        }
    });

})();
