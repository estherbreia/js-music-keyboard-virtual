const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = [];

let audio = new Audio("src/assets/tunes/a.wav")

const playTune = (key) => {
    audio.src = `src/assets/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active")
    }, 150)

};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    const normalizedKey = e.key.toLowerCase();  // Converte para minúscula

    if (mapedKeys.includes(normalizedKey)) {
        playTune(normalizedKey);
    };
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHiddenKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
    
}




volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHiddenKeys)

