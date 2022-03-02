
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // partir de l'element puis luis ajouter un event
    document.getElementById("run").addEventListener("click", () => {
        let color = document.getElementById("color").value;
        document.body.style.background = color;
    });

})();
