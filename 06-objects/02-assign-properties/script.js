//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        { id: "0001", available: false, user: "leny", os: "macOS" },
        { id: "0002", available: false, user: "Nicolas" },
        { id: "0003" },
        { id: "0004", os: "Windows" },
        { id: "0005" },
        { id: "0006", os: "macOS" },
        { id: "0007" },
        { id: "0008" },
        { id: "0009", available: false, user: "Anthony" },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };


    document.getElementById("run").addEventListener('click', () => {

        for (i = 0; i < Object.keys(computers).length; i++) {
            Object.keys(computers[i]).forEach((el) => {
                if ('available' in computers[i] === false) {
                    computers[i].available = true;
                }
                if ('os' in computers[i] === false) {
                    computers[i].os = "linux";
                }
                if ('user' in computers[i] === false) {
                    computers[i].user = null;
                }

            });
        }

        console.log(computers);
    });
})();
