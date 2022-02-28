
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let a = 1;

    while(a<100){
        console.log(a);
        if(a%3 == 0 && a%5 == 0){
            console.log(a+" fizzbuzz");
        }
        else if(a%3 == 0){
            console.log(a+" fizz");
        }
        else if(a%5 == 0){
            console.log(a +" buzz");
        }
        a++
    }

})();
