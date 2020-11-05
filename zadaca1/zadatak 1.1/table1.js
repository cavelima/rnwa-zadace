var table = document.getElementById("customers");

if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];

        for (let j = 0; j < row.cells.length; j++)
            row.cells[j].onclick = function () {
                alert(this.innerHTML);
            };
    }
}