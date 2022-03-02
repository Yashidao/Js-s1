
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    if(h<17 && m<30){
        document.getElementById("target").innerHTML = "Hello it's before 17h30!"
    }
    else{
        document.getElementById("target").innerHTML = "Good evening it's after 17h30!"
    }

})();
