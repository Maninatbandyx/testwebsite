// register.js

// Function to be executed when the page is fully loaded
function onPageLoad() {
    console.log('Register page is loaded!');
    
    // Add event listener to the registration form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', onRegisterSubmit);
    }
  }
  
  // Function to be executed when the registration form is submitted
  function onRegisterSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form inputs
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform basic form validation
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Log the entered values to the console (replace with your desired actions)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  
    // You can add additional actions here, such as sending data to a server for registration
  }
  
  // Event listener for the "DOMContentLoaded" event
  document.addEventListener('DOMContentLoaded', onPageLoad);
  