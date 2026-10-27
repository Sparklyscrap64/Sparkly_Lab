const text = "Welcome to Sparkly Lab. Keep exploring!";
const typingText = document.getElementById("typing-text");

const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

let index = 0;
let typingTimer = null;

function startAnimation() {
    clearTimeout(typingTimer);

    index = 0;
    typingText.textContent = "";

    startButton.disabled = true;

    typeCharacter();
}

function typeCharacter() {
    if (index < text.length) {
        typingText.textContent += text[index];

        index++;

        typingTimer = setTimeout(typeCharacter, 70);
    } else {
        startButton.disabled = false;
    }
}

function resetAnimation() {
    clearTimeout(typingTimer);

    index = 0;
    typingText.textContent = "";

    startButton.disabled = false;
}

if (startButton && resetButton && typingText) {
    startButton.addEventListener("click", startAnimation);
    resetButton.addEventListener("click", resetAnimation);
}