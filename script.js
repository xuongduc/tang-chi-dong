// Select the heart, pop-up, and text elements
const heart = document.querySelector('.heart');
const popup = document.querySelector('.popup');
const text = document.querySelector('.text');

// Function to show the pop-up
function showPopup() {
  // Show the pop-up
  popup.classList.remove('hidden');
  popup.classList.add('show');

  // Hide the text
  text.classList.remove('show');
  text.classList.add('hidden');

  // Automatically hide the pop-up after 2 seconds and then show the text again
  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');

    // Delay the text's reappearance slightly after the popup disappears
    setTimeout(() => {
      text.classList.remove('hidden');
      text.classList.add('show');
    }, 200); // Delay of 200ms
  }, 2000);
}

// Add click event listener to the heart
heart.addEventListener('click', showPopup);
