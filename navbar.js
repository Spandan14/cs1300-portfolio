const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0", "opacity-0");
    menu.classList.add("max-h-40", "opacity-100");
  } else {
    menu.classList.add("max-h-0", "opacity-0");
    menu.classList.remove("max-h-40", "opacity-100");
  }
});
