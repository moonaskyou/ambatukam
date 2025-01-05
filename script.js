function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');  // Toggle the 'active' class to show/hide menu
}

// script.js
document.getElementById("light").addEventListener("click", function() {
    document.body.classList.add("light"); // Apply light theme
    document.body.classList.remove("dark"); // Remove dark theme
});

document.getElementById("dark").addEventListener("click", function() {
    document.body.classList.add("dark"); // Apply dark theme
    document.body.classList.remove("light"); // Remove light theme
});
