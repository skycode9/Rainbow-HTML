// Function to automatically update the year in copyright notices
function updateCopyrightYear() {
  // Get all elements with the class 'copyright-year'
  const yearElements = document.querySelectorAll('.copyright-year');
  
  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Update each element with the current year
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateCopyrightYear);
