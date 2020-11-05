let customers = document.getElementById("customers");
let records = document.getElementById("records");

if (customers != null) {
    for (let i = 0; i < customers.rows.length; i++) {

      let row = customers.rows[i];

        for (let j = 0; j < row.cells.length; j++) {
          row.cells[j].onclick = function () {
              records.innerHTML = "<p>" + row.innerHTML  + "</p>";
            };
        }

    }
}