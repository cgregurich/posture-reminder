
function start() {
    audio.play();
    setInterval(() => audio.play(), delay);
}



const audio = new Audio("audio.mp3");

const button = document.querySelector("#start");
button.addEventListener("click", start);

const delay = 300000;