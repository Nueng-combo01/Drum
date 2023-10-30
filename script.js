
$(document).ready(function() {
    var audio = $("#myAudio")[0]; 

    $("#playButton").click(function() {
        audio.play();
    });

    $("#pauseButton").click(function() {
        audio.pause();
    });
});

document.querySelector("f").addEventListener("click", () => {
    alert("Sound");
  });
