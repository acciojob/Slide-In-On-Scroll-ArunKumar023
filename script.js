// Your JS code here.
  // Get all the images that need to slide in on scroll
  const slideInImages = document.querySelectorAll('.slide-in');

  // Function to add the active classname to the image, when scrolled to it
  function checkSlide() {
    // Loop over each image
    slideInImages.forEach(slideInImage => {
      // Get the bottom of the image
      const slideInImageBottom = slideInImage.offsetTop + slideInImage.height;
      // Check if the image is in the viewport
      const isHalfShown = window.scrollY + window.innerHeight > slideInImage.offsetTop + slideInImage.height / 2;
      const isNotScrolledPast = window.scrollY < slideInImageBottom;
      if (isHalfShown && isNotScrolledPast) {
        slideInImage.classList.add('active');
      } else {
        slideInImage.classList.remove('active');
      }
    });
  }

  // Debounce function to limit the number of times the checkSlide function is called
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Listen to the scroll event and call the checkSlide function
  window.addEventListener('scroll', debounce(checkSlide));
