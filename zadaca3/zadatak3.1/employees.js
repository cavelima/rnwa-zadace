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

function loadXMLDoc(search) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "employees.php", true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      handleData(this.responseText);
    }
  };
  xhttp.send("search=" + search);
}

var search = document.getElementById("search");
var input = document.getElementById("value");

search.onclick = function() {
  loadXMLDoc(input.value);
}