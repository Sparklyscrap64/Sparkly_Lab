// COLOR GENERATOR

const colorDisplay = document.getElementById("color-display");
const colorCode = document.getElementById("color-code");

const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");
const copyMessage = document.getElementById("copy-message");

function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);

        color += letters[randomIndex];
    }

    colorDisplay.style.backgroundColor = color;
    colorCode.textContent = color;

    copyMessage.textContent = "New color generated!";
}

async function copyColor() {
    const color = colorCode.textContent;

    try {
        await navigator.clipboard.writeText(color);

        copyMessage.textContent = color + " copied!";
    } catch (error) {
        copyMessage.textContent =
            "Copy unavailable. Select the HEX code manually.";
    }
}

if (generateButton) {
    generateButton.addEventListener("click", generateColor);
}

if (copyButton) {
    copyButton.addEventListener("click", copyColor);
}
