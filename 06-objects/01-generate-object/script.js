// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    let myObject = {
        firstName: "Kevin-May",
        lastName: "Tran",
        age: "30",
        city: "Manage",
        country: "Belgium"
    }

    document.getElementById("run").addEventListener('click', () => {
        console.log(myObject);
    });
})();
