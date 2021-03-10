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

function play() {
    var audio = document.getElementById("audio");
    audio.play();
    document.querySelector('body').style.backgroundImage = "url('https://media.tenor.com/images/cd1156d41299507df9a15fa606e41f9a/tenor.gif')";
    document.getElementById('logo').src = "imgs/nyan_cat.gif";
    document.getElementById('leafy_img').src = "imgs/nyan_cat.gif";
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




