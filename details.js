const now = new Date();
const formattedDate = `${now.toLocaleString('en-US', { weekday: 'short' })} ${now.toLocaleString('en-US', { month: 'short' })} ${now.getDate()} ${now.toLocaleTimeString('en-US', { hour12: false })}`;

document.getElementById("login-time").innerHTML = `Last login: ${formattedDate} on ttys000`;

const arrow = document.getElementById('scroll-arrow');

function updateArrowVisibility() {
    arrow.style.visibility = window.scrollY > 0 ? 'hidden' : 'visible';
}

// Hide/show on scroll
window.addEventListener('scroll', updateArrowVisibility);

// Initialize on load
updateArrowVisibility();
