window.addEventListener('DOMContentLoaded', () => {
  const enableAudioBtn = document.getElementById('enableAudio');
  const zedContainer = document.querySelector('.zed-container');
  const luxContainer = document.querySelector('.lux-container');
  const zedAudio = document.getElementById('zedAudio');
  const luxAudio = document.getElementById('luxAudio');

  let audioEnabled = false;

  enableAudioBtn.addEventListener('click', () => {
    audioEnabled = true;
   
    zedAudio.play().then(() => {
      zedAudio.pause();
      zedAudio.currentTime = 0;
    });
    luxAudio.play().then(() => {
      luxAudio.pause();
      luxAudio.currentTime = 0;
    });

    enableAudioBtn.style.display = 'none'; 
  });

  if (zedContainer && zedAudio) {
    zedContainer.addEventListener('mouseenter', () => {
      if (audioEnabled) {
        zedAudio.currentTime = 0;
        zedAudio.play().catch(err => console.warn("Zed audio error:", err));
      }
    });

    zedContainer.addEventListener('mouseleave', () => {
      zedAudio.pause();
      zedAudio.currentTime = 0;
    });
  }

  if (luxContainer && luxAudio) {
    luxContainer.addEventListener('mouseenter', () => {
      if (audioEnabled) {
        luxAudio.currentTime = 0;
        luxAudio.play().catch(err => console.warn("Lux audio error:", err));
      }
    });

    luxContainer.addEventListener('mouseleave', () => {
      luxAudio.pause();
      luxAudio.currentTime = 0;
    });
  }
});