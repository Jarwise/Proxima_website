//alert("Hey you!")

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("Navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.height = "50px";
  } else {
    document.getElementById("Navbar").style.padding = "40px 10px";
    document.getElementById("logo").style.height = "70px";
  }
} 

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
  document.querySelector('header').style.backgroundColor = getRandomColor();
  //document.getElementById('headr').style.backgroundColor = getRandomColor();
  document.getElementById('menu').style.backgroundColor = getRandomColor();
  document.getElementById('AI').style.backgroundColor = getRandomColor();
  document.getElementById('leafy').style.backgroundColor = getRandomColor();
  document.getElementById('app').style.backgroundColor = getRandomColor();
  document.getElementById('web').style.backgroundColor = getRandomColor();
  document.getElementById('lol').style.backgroundColor = getRandomColor();
  document.getElementById('yeet').style.backgroundColor = getRandomColor();
  document.getElementById('play').style.backgroundColor = getRandomColor();
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
    document.querySelector('body').style.backgroundImage = "url('https://media.tenor.com/images/cd1156d41299507df9a15fa606e41f9a/tenor.gif')";
    document.getElementById('logo').src = "imgs/nyan_cat.gif";
    document.getElementById('leafy_img').src = "imgs/nyan_cat.gif";
    setInterval(changeColor, 1000);
  }
  
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className + " - yes Leafy, I know that name");
  });


  function SwitchMenu(obj){
    if(document.getElementById){
    var el = document.getElementById(obj);
    var ar = document.getElementById("masterdiv").getElementsByTagName("div"); //DynamicDrive.com change
      if(el.style.display != "block"){ //DynamicDrive.com change
        for (var i=0; i<ar.length; i++){
          if (ar[i].className=="submenu") //DynamicDrive.com change
          ar[i].style.display = "none";
        }
        el.style.display = "block";
      }else{
        el.style.display = "none";
      }
    }
  }




