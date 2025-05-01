const now = new Date();
const formattedDate = `${now.toLocaleString('en-US', { weekday: 'short' })} ${now.toLocaleString('en-US', { month: 'short' })} ${now.getDate()} ${now.toLocaleTimeString('en-US', { hour12: false })}`;

document.getElementById("login-time").innerHTML = `Last login: ${formattedDate} on ttys000`;
