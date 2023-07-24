document.addEventListener("DOMContentLoaded", function () {
    const lofiAudio = document.getElementById("lofiAudio");
    const atcAudio = document.getElementById("atcAudio");
    const playButton = document.getElementById("playButton");
    const menuButton = document.getElementById("menuButton");
    const nextButton = document.getElementById("nextButton");
    const volumeSliderContainer = document.getElementById("volumeSliderContainer");
    const lofiVolumeSlider = document.getElementById("lofiVolumeSlider");
    const atcVolumeSlider = document.getElementById("atcVolumeSlider");
  
    // Lofi files array
    const lofiFiles = ["20210610_Ambulo x Squeeda – Noctilucent.mp3", "20210610_amies – Destination Unknown.mp3", "20210610_Bcalm x Banks x Fletcher Reed – Comfort.mp3","20210610_amies – Destination Unknown.mp3",'20210610_Bcalm x Banks x Fletcher Reed – Comfort.mp3','20210610_Blue Wednesday – Wildflower.mp3','20210610_BVG – Spring Rain.mp3','20210610_BVG x møndberg x Spencer Hunt – Sunday Morning.mp3','20210610_C4C – Go Time.mp3'];
    let lofiIndex = 0;
  
    // Function to play next lofi file
    function playNextLofi() {
      lofiIndex = (lofiIndex + 1) % lofiFiles.length;
      lofiAudio.src = lofiFiles[lofiIndex];
      lofiAudio.play();
    }
  
    // Randomly select a lofi file on page load
    lofiIndex = Math.floor(Math.random() * lofiFiles.length);
    lofiAudio.src = lofiFiles[lofiIndex];
  
    let isPlaying = false;
    let isMenuVisible = false;
  
    playButton.addEventListener("click", function () {
      if (isPlaying) {
        lofiAudio.pause();
        atcAudio.pause();
        playButton.textContent = ">";
      } else {
        lofiAudio.play();
        atcAudio.play();
        playButton.textContent = "||";
      }
      isPlaying = !isPlaying;
    });
  
    menuButton.addEventListener("click", function () {
      if (isMenuVisible) {
        volumeSliderContainer.style.display = "none";
      } else {
        volumeSliderContainer.style.display = "block";
      }
      isMenuVisible = !isMenuVisible;
    });
  
    nextButton.addEventListener("click", playNextLofi);
  
    lofiVolumeSlider.addEventListener("input", function () {
      lofiAudio.volume = lofiVolumeSlider.value;
    });
  
    atcVolumeSlider.addEventListener("input", function () {
      atcAudio.volume = atcVolumeSlider.value;
    });
  });
  