$(document).ready(function() {
       
  $("#show").click(function(e) {
    console.log("Clicking");
    e.preventDefault();
    var url = 'http://' + $("#emucel-url").val();
    console.log(url);
    $("#emucel-browser").attr("src", url);
    $("#emucel-browser").attr("style", "-webkit-transform: scale(1); -webkit-transform-origin: 0px 0px;");
  });
});