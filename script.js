
$(document).ready(function() {
    var audio = $("#myAudio")[0]; 

    $("#playButton").click(function() {
        audio.play();
    });

    $("#pauseButton").click(function() {
        audio.pause();
    });
});

  const sounds = {
    a: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
    s: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
    d: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
    f: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
    g: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
    h: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
  };

  function playSound(key) {
    if (sounds[key]) {
      sounds[key].currentTime = 0;
      sounds[key].play();
    }
  }

  document.querySelectorAll('.drum button').forEach((button) => {
    const key = button.getAttribute('data-key');
    button.addEventListener('click', () => playSound(key));
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (sounds[key]) {
      playSound(key);
    }
  });