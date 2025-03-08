// code no. 563
// Function to load content dynamically
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

// Select menu toggle button and navbar
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

// Toggle navbar visibility when button is clicked
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close navbar when a link is clicked (for better user experience)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});




