
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let arrDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        let year = document.getElementById("year").value;

        let date = new Date("'" + year + "'");
        let month = date.getMonth(); // le mois 0 - 11 > arrMonth
        let day = date.getDate() - 1; // le jour 1 - 31
        let nDay = date.getDay(); // nom du jour 0 - 6 > arrDay

        let x = 0;
        let y = 0;
        let z = 0;

        for (month; month < arrMonth.length; month++) {
            console.log(arrMonth[month]);
            if (month == x) {
                for (nDay = 0; nDay < arrDay.length - 1 + 1; nDay++) {
                    console.log(arrDay[nDay]);
                    if (nDay == y) {
                        for (day = 0; day < 31; day++) {
                            console.log(day + 1);
                            if (nDay === arrDay) {
                                nDay = 0;
                            }
                            if (day == z) {
                                z++;
                                break;
                            }
                        }
                    }
                    y++;
                }
            }
            x++;
        }
        //alert(day);
        // C'est broken
    });

})();
