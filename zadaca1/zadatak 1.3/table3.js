let customers = document.getElementById("customers");
let records = document.getElementById("records");

if (customers != null) {
    for (let i = 0; i < customers.rows.length; i++) {

      let row = customers.rows[i];

        for (let j = 0; j < row.cells.length; j++) {
          cell = row.cells[j];

          cell.className = "hasTooltip";
          let span = document.createElement("span");
          span.className = "tooltiptext"
          let text = document.createTextNode(row.innerText);
          span.appendChild(text);
          cell.appendChild(span)
        }

    }
}