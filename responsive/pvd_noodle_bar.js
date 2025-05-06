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

function toggleMobileMenu() {
    const dropdown = document.getElementById("mobileDropdown");
    if (dropdown.classList.contains("max-h-0")) {
        dropdown.classList.remove("max-h-0");
        dropdown.classList.add("max-h-[1000px]");
    } else {
        dropdown.classList.remove("max-h-[1000px]");
        dropdown.classList.add("max-h-0");
    }
}
