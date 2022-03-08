// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    let div = document.getElementById("target");
    let table = document.createElement('table'); // tableau


    div.appendChild(table);


    for (i = 0; i < 10; i++) {
        let ligne = document.createElement('tr');
        table.appendChild(ligne);
        for (j = 0; j < 10; j++) {
            let col = document.createElement('td');
            ligne.appendChild(col);
        }
    }



})();
