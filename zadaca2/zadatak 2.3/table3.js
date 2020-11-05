$(document).ready(function(){
  $("td").mouseover(function() {
    let row = $(this).parent().text();
    let span = $('<span>', {class: 'tooltiptext', text : row});
  
    $(this).addClass("hasTooltip").append(span);
  });

  $("td").mouseout(function() {
    $(this).removeClass("hasTooltip");
    $('span', this).remove();    
  });
});