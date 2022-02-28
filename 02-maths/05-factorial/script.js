
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value
    
    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let a = document.getElementById("number").value;
        let x = 1;
        function factorial(a){
            if(a>0){
                x = x*a;
                factorial(a-1);
            }
            return x;
        }
        alert(factorial(a));
    });

})();
