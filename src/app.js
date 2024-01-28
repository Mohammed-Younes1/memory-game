document.addEventListener('DOMContentLoaded', function() {
    // Show the popup when the page loads
    document.getElementById('overlay').style.display = 'flex';
  });
  
  function closePopup() {
    // Close the popup
    document.getElementById('overlay').style.display = 'none';
  }
  