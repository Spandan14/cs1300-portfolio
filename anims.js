const texts = ["an engineer walked into a product design interview...", "interfacing designs -> designing interfaces", "from syscalls to design calls", "os pipes to js cards"];
let textIndex = 0;
const dynamicTagline = document.getElementById("dynamic-tagline");

function typeText(text, delay) {
    const loopTyping = function() {
        if (dynamicTagline.textContent.length < text.length) {
            dynamicTagline.textContent += text.charAt(dynamicTagline.textContent.length);
            setTimeout(loopTyping, delay);
        }
    }

    loopTyping();
}

function eraseText(delay) {
    const loopErasing = function() {
        if (dynamicTagline.textContent.length > 0) {
            dynamicTagline.textContent = dynamicTagline.textContent.slice(0, -1);
            setTimeout(loopErasing, delay);
        }
    }

    loopErasing();
}

function fullAnimation() {
    eraseText(50);
    setTimeout(() => {
        textIndex = (textIndex + 1) % texts.length;
        typeText(texts[textIndex], 100);
        setTimeout(() => {
            fullAnimation();
        }, texts[textIndex].length * 100 + 1000);
    }, texts[textIndex].length * 50 + 500);
}

setTimeout(() => {
    fullAnimation();
}, 6000);

