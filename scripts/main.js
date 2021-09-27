new Glide('.glide').mount()

const config = {
type: "carousel",
perView: 3,
breakpoints: {
0: {
    perView: 3
  }
}
}; 
new Glide(".glide", config).mount();


var sound = new Howl({
  src: ['recursos\mixkit-life-is-a-dream-837.mp3']
});

sound.play();

window.onload = init;

function init () {
var sound = new How1({
src: ["../recursos\Friends.ogg"],
});

  var playMusic=document.getElementsById ("playMusic");

  playMusic.addEventListener("click", function () {
    sound.play();
  });

 var pauseMusic=document.getElementsById ("pauseMusic");
  
  pauseMusic.addEventListener("click", function () {
    sound.pause();
  });

  var stopMusic=document.getElementsById ("stopMusic");
  
  stopMusic.addEventListener("click", function () {
    sound.stop();
  })};
