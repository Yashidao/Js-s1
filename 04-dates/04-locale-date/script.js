
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let arrDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let d = new Date().toLocaleDateString('en-GB', { weekday: "long", month: "long", day: "numeric", year: "numeric" });

    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    let nDay = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();

    document.getElementById("target").innerHTML = arrDay[day] + " " + nDay + " " + arrMonth[month] + " " + year + ", " + hour + "h" + min;

})();
