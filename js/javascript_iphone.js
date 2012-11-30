$(document).ready(function() {
       
  $("#show").click(function(e) {
    console.log("Clicking");
    e.preventDefault();
        
    var url = 'http://www.mobilephoneemulator.com/emulate.php?url=' + $("#emucel-url").val() + '&user_agent=Mozilla/5.0%20%28iPhone%3B%20U%3B%20CPU%20iPhone%20OS%204_0%20like%20Mac%20OS%20X%3B%20xx-xx%29%20AppleWebKit/532.9%20%28KHTML%2C%20like%20Gecko%29%20Version/4.0.5%20Mobile/8A293%20Safari/6531.22.7&device=Apple-Iphone4';
    console.log(url);
    $("#emucel-browser").attr("src", url);
    $("#emucel-browser").attr("style", "-webkit-transform: scale(1); -webkit-transform-origin: 0px 0px;");
  });
});