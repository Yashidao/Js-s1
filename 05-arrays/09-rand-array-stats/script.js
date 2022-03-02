// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {



    document.getElementById("run").addEventListener("click", () => {
        let arr = [];
        let x;
        let min;
        let max;
        let sum;
        let ave;
        for(i=1;i<11;i++){
            x = Math.round(Math.random() * 100);
            document.getElementById("n-"+i).innerHTML = x;
            arr[i-1]=x;
        }
        min = Math.min(...arr);
        max = Math.max(...arr);
        sum = arr.reduce(function(a,b){
            return a + b;
        });
        ave = sum / arr.length;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = ave;
    });

})();
