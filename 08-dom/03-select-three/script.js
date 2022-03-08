// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let collection = document.getElementsByClassName("target");
    for(i=0;i<collection.length;i++){
        collection[i].innerHTML = "owned";
    }
})();
