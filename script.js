
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
    a: new Audio('/week8/Dry-Brush Snares/SnareBR_2-017.wav'),
    s: new Audio('/week8/Dry-Toms/Tom_1-000.wav'),
    d: new Audio('/week8/Dry-Percussion/Perc_1-002.wav'),
    f: new Audio('/week8/Dry-Kicks/Kick_1-002.wav'),
    g: new Audio('/week8/Dry-Snares/Snares1 A/Snare_1-026.wav'),
    h: new Audio('/week8/Dry-Hats/Hats2 26-56/Hat_2-045.wav'),
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
