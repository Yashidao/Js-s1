
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    //     // your code here
    //     let e = document.getElementById("red").addEventListener("click", myfunction());
    //     document.getElementById("green").addEventListener("click", myfunction());
    //     document.getElementById("yellow").addEventListener("click", myfunction());
    //     document.getElementById("blue").addEventListener("click", myfunction());
    //     console.log(e);
    //     function myfunction(){
    //         let color = document.getElementsByTagName("button"); 
    //         console.log(color);
    //         switch(color){
    //             case 'red':
    //                 alert("red");
    //                 break;
    //             // default:
    //             //     alert("rem");
    //             //     break;
    //         }
    //     }


    // code fourni par le coach: pas mauvais mais mauvaise façon de voir le problème, j'aurais dû partir des objets puis faire les events au lieu du contraire
    let actions = document.querySelectorAll("button")

    actions.forEach((el) => {
        el.addEventListener('click', () => {

            switch (el.innerHTML) {
                case 'Red':
                    document.body.style.background = "red"
                    break;

                case 'Blue':
                    document.body.style.background = "blue"
                    break;
                    case 'Green':
                    document.body.style.background = "green"
                    break;
                    case 'Yellow':
                    document.body.style.background = "yellow"
                    break;
            }

        })
    })
})();
