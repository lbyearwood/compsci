// Select menu toggle button and menu
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Toggle menu visibility when button is clicked
menuToggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Close menu when a link is clicked (for better user experience)
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
    });
});
