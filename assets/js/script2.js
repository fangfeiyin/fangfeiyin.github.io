$(document).ready(function() {

	
$('#carousel-next').click(function(){
  var leftvalue = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (leftvalue==-3840){
    return false;
  } else {
    $('#carousel').css('margin-left', leftvalue - 960);
  }

})

$('#carousel-prev').click(function(){
  var leftvalue = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (leftvalue==0){
    return false;
  } else {
    $('#carousel').css('margin-left', leftvalue + 960);
  }

})

});