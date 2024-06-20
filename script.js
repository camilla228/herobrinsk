const myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

const element = document.getElementById('mainbox');
element.classList.remove('animate');

setTimeout(function(){
  element.classList.add('animate');
}, 5000);

function rotateFunction(){
  const min = 1024;
  const max = 9999;
  const deg = Math.floor(Math.random() * (max - min)) + min;
  document.getElementById('box').style.transform = "rotate("+deg+"deg)";
}