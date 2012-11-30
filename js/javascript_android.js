$(document).ready(function() {
       
  $("#show").click(function(e) {
    console.log("Clicking");
    e.preventDefault();
        
    var url = 'http://www.mobilephoneemulator.com/emulate.php?url=' + $("#emucel-url").val() + '&user_agent=Mozilla/5.0%20%28Linux%3B%20U%3B%20Android%202.3.1%3B%20xx-xx%3B%20SAMSUNG%20GT-I9100/I9100BUKB2%20Build/GRH78%29%20AppleWebKit/533.1%20%28KHTML%2C%20like%20Gecko%29%20Version/4.0%20MobileSafari/533.1&device=Samsung-GTi9100';
    console.log(url);
    $("#emucel-browser").attr("src", url);
    $("#emucel-browser").attr("style", "-webkit-transform: scale(1); -webkit-transform-origin: 0px 0px;");
  });
});