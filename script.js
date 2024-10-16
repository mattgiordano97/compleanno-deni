const button = document.getElementById('btn');
const inputText = document.getElementById('codice-segreto');
const result = document.getElementById("result");
const hiddenLink = document.getElementById("hidden-link");

const insulti = ["e sbagliat", "par a fess", 'ma lo hai scritto bene?', 'boh io basito'];
let insultiIndex = 0;

button.addEventListener("click", () => {
    console.log('click');
    const input = inputText.value;
    if (typeof input !== 'string') {
        return;
    }
    const password = input.toLowerCase();

    if (password === 'trombetti') {
        console.log("codice corretto");
        result.textContent = "Sempre sia lodato. Ora clicca il coso blu.";
        hiddenLink.hidden = false;
        result.style.color = "green";
    }
    else {
        result.textContent = insulti[insultiIndex];
        insultiIndex = (insultiIndex + 1) % insulti.length;
        result.style.color = "red";
    }
});