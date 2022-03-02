
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;

        let date = new Date(); // prends la date actuelle 
        let d = date.getDay(); // jour actuelle etc
        let m = date.getMonth();
        let y = date.getFullYear();

        year = Math.abs(year - y + 1); // prends la valeur absolue // +1 car l'anniversaire est dans l'année
        month = m - month + 12; // +12 pour pallier au probleme des mois
        day = 30 - (day - (d - 1)); // -1 parce qu'on compte a partir de 0

        if(day>31){
            month++;
            day = 1;
        }
        if(month>12){
            year++;
            month = 1;
        }
        alert("you have: " + year + "years - "+ month +"month - " +  day + "days");
    });

})();
