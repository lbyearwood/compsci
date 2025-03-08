function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading content:", error));
}

// Load home content by default when the page loads
document.addEventListener("DOMContentLoaded", function () {
    loadContent('home.html');
});

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

// code no. 101
