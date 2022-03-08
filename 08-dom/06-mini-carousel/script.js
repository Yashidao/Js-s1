// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let src = document.getElementsByTagName("img")[0].getAttribute('src');

    let x = 0;

    document.getElementById("next").addEventListener('click', () => {

        document.getElementsByTagName("img")[0].setAttribute('src', gallery[x]);

        x++;

        if (x == gallery.length) {
            x = 0;
        }

    });

})();
