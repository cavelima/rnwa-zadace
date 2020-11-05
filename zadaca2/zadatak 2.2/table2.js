$(document).ready(function(){
  $("td").click(function(){
   let row = $(this).parent().text();

   $("#records").empty().append("<p>" + row + "</p>")
  });
});