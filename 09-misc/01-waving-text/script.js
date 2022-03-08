// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    let font1 = 10 + "px";
    let font2 = 15 + "px";
    let font3 = 20 + "px";
    let font4 = 25 + "px";
    let font5 = 30 + "px";
    
    let arr = [];

    let txt = document.getElementById("target").innerHTML;

    arr = txt.split('');

    for(i=0;i<txt.length;i++){
        document.getElementById("target").style.fontSize = font1;
        
    }
    
    console.log(arr);

})();
