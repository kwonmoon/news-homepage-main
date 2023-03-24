const hamburger = document.querySelector(".hamburger");
const exit_menu = document.querySelector(".mobile-menu-exit");
const mobile_bg = document.querySelector(".mobile-bg");
const mobile_nav_list = document.querySelector(".mobile-nav-list");

hamburger.addEventListener("click", () => {
   mobile_bg.style.display = "block";
   mobile_nav_list.style.display = "block";
});

exit_menu.addEventListener("click", () => {
   mobile_bg.style.display = "none";
   mobile_nav_list.style.display = "none";
});