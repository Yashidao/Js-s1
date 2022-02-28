
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE

    let age = prompt("Your age?", "ex: 25");
    let gender = prompt("Your gender?", "male or female");
    let town = prompt("Your town?", "ex: manage");

    alert("You're a " + gender + ", you've " + age + ", and you live in " + town + ".\n");
    
    function myFunction() {

        if (confirm("all is good?\nIf yes: press <ok>\nIf not: press <cancel>") == true) {
            alert("Perfect!");
        }
        else {
            alert("Put you're information again.");
            let age = prompt("Your age?", "ex: 25");
            let gender = prompt("Your gender?", "male or female");
            let town = prompt("Your town?", "ex: manage");
        }
    }

    myFunction();
})();
