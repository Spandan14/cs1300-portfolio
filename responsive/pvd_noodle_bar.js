function openOverlay(src) {
    const overlay = document.getElementById("imgOverlay");
    const img = document.getElementById("overlayImg");
    img.src = src;
    overlay.classList.remove("hidden");
}

function closeOverlay() {
    const overlay = document.getElementById("imgOverlay");
    const img = document.getElementById("overlayImg");
    img.src = "";
    overlay.classList.add("hidden");
}
