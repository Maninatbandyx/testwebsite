/* Add this JavaScript code in a separate file and link it to your HTML file
   Ensure this code is placed before the closing </body> tag in your HTML file */

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const navMenu = document.getElementById("navbarNav");
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
}

// Event listener to trigger the toggleMobileMenu function when the toggle button is clicked
document.querySelector(".navbar-toggler").addEventListener("click", toggleMobileMenu);
