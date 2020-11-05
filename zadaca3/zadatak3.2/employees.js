function handleData(data) {

  let rows = JSON.parse(data);

  if(rows.length > 0) {
    $("#messages").empty().append("<table id='customers'></table>");
    
    let table = $("#customers");

    let tableHead = "<tr>"
    tableHead += "<td>First Name</td>"
    tableHead += "<td>Last Name</td>"
    tableHead += "<td>Birth Date</td>"
    tableHead += "<td>Hire Date</td>"
    tableHead += "<td>Gender</td>"
    tableHead += "</tr>"

    table.append(tableHead)

    for(let row of rows) {
      let tableRow = "<tr class='alt'>"
      tableRow += "<td>" + row.first_name + "</td>"
      tableRow += "<td>" + row.last_name + "</td>"
      tableRow += "<td>" + row.birth_date + "</td>"
      tableRow += "<td>" + row.hire_date + "</td>"
      tableRow += "<td>" + row.gender + "</td>"
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
         $.post("./employees.php", {search : value}, handleData)
     }
 })
});