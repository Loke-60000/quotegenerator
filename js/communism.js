const audio = new Audio("img/S3K_63.WAV");
const buttons = document.querySelectorAll("coolbutton");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});