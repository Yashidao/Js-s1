
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let a = 1;
        let b = 1;

        while (a < 21) {
            b = Math.pow(a, 2);
            if(b<21){
                alert(b);
            }
            a++;
        }

    });

})();
