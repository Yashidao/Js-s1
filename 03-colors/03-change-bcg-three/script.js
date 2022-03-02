
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let a = Math.round((Math.random() * 255));
        let b = Math.round((Math.random() * 255));
        let c = Math.round((Math.random() * 255));
        color = "rgb(" + a + "," + b + "," + c + ")";
        console.log(color)
        document.body.style.background = color;
    });

})();
