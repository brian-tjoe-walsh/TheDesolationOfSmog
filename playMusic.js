document.addEventListener('DOMContentLoaded', function () {
  setTimeout(addVolumeListener, 5000);
});


function addVolumeListener() {
  debugger
  song = document.getElementById("music");
  song.volume = 0.5;
  song.play();
  let volume = document.getElementById("volume");
  
  volume.addEventListener('click', function() {
    debugger
    song = document.getElementById("music");
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
    // if (song.playing)
  });
}
// let song = document.getElementById("music");
// document.addEventListener()

// song.play();

// document.addEventListener(song)