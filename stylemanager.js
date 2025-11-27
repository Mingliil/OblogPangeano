/*$(function() {
  $('#blogtv').hover(function() {
    $('.box').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    $('.box').css('background-color', '');
  });
});*/
document.getElementById("ultrablog").onmouseover = () =>{
    document.getElementById("imagens").style.backgroundImage = 'url(ultrablog/CoinPunching.png)';
    document.getElementById("imagens").style.backgroundSize = "100%";
}
document.getElementById("blogtv").onmouseover = () =>{
    document.getElementById("imagens").style.backgroundImage = 'url(ultrablog/CoinPunching.png)';
    document.getElementById("imagens").style.backgroundSize = "100%";
}