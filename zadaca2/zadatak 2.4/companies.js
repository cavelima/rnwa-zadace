function handleData(data,status) {

  let rows = JSON.parse(data);

  if(rows.length > 0) {
    $("#messages").empty().append("<table id='customers'></table>");
    
    let table = $("#customers");

    let tableHead = "<tr>"
    tableHead += "<td>Company</td>"
    tableHead += "<td>Contact</td>"
    tableHead += "<td>Country</td>"
    tableHead += "</tr>"

    table.append(tableHead)

    for(let row of rows) {
      let tableRow = "<tr class='alt'>"
      tableRow += "<td>" + row.company + "</td>"
      tableRow += "<td>" + row.contact + "</td>"
      tableRow += "<td>" + row.country + "</td>"
      tableRow += "</tr>"

      table.append(tableRow)

    }
  }
}

$(document).ready(function () {
   $("#search").click(function() {
      let value = $("#value").val();

      if(!value) {
          $("#messages").empty().append("<p>Insert a value</p>");
      }

      if(value) {
          $.post("./companiesSearch.php", {search : value}, handleData)
      }
  })
});
