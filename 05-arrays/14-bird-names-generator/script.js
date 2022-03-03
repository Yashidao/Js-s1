// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    let rBirds;
    let rAdj;
    let myBirds;
    let myAdj;

    document.getElementById("run").addEventListener('click', () => {
        rBirds = Math.round(Math.random() * 11);
        rAdj = Math.round(Math.random() * 10);

        let arrAdj = Array.from(adjectives);

        myBirds = birds[rBirds].name;
        myAdj = arrAdj[rAdj];

        //console.log(adjectives.item);

        if (birds[rBirds].fem == true) {
            document.getElementById("target").innerHTML = "La " + myBirds + " " + myAdj + "e.";
        } else {
            document.getElementById("target").innerHTML = "Le " + myBirds + " " + myAdj + ".";

        }

    });
})();
