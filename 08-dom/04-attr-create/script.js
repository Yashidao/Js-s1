// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    let img = document.getElementById("source").getAttribute('data-image');
    let para = document.createElement("img");
    para.setAttribute('src', img);
    document.getElementById("target").appendChild(para);
    console.log(para);

})();

