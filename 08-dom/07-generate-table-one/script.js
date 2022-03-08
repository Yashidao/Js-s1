// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let div = document.getElementById("target");
    let table = document.createElement('table'); // tableau
    let ligne = document.createElement('tr');

    div.appendChild(table);
    table.appendChild(ligne);

    for (i = 0; i <= 10; i++) {
        let col = document.createElement('td');
        ligne.appendChild(col);
    }

})();
