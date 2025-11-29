/*$(function() {
  $('#blogtv').hover(function() {
    $('.box').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    $('.box').css('background-color', '');
  });
});*/
let imgOld = "";
const imgTopo = document.getElementById("topo")
const imagem = document.getElementById("baixo");

document.getElementById("ultrablog").onmouseenter = () =>{
imgSwitch('ultrablog/CoinPunching.png');
}
document.getElementById("blogtv").onmouseenter = () =>{
imgSwitch('BlogDa---/imgs/aaming.png');
}
document.getElementById("frostBlog").onmouseenter = () =>{
imgSwitch('FrostBlog/Frostpunk.jpg');
}


function imgSwitch(imgNew){
    if (imgTopo.classList.contains('transparent')){
    setTimeout(function(){
      imgTopo.classList.remove('transparent');
      setTimeout(function(){
        imgTopo.classList.add('transparent');
          imagem.src = imgNew;
      }, 1000)
      }, 100)
  }
  else{
    imgTopo.classList.add('transparent');
    imagem.src = imgNew;
  }
}