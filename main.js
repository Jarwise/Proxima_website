//alert("Hey you!")

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




