// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let over = document.getElementsByTagName("img")[0].getAttribute('data-hover');
    let out = document.getElementsByTagName("img")[0].getAttribute('src');

    document.getElementsByTagName("img")[0].addEventListener("mouseover", () => {
        document.getElementsByTagName("img")[0].setAttribute('src', over)
    });
    document.getElementsByTagName("img")[0].addEventListener("mouseout", () => {
        document.getElementsByTagName("img")[0].setAttribute('src', out)
    });

})();
