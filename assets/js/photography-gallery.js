// Photography Gallery JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on a photography page
  if (!window.photographyData) return;

  const { images } = window.photographyData;
  let currentIndex = 0;

  const mainImage = document.getElementById("main-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const currentImageSpan = document.getElementById("current-image");
  const totalImagesSpan = document.getElementById("total-images");
  const thumbnailBtns = document.querySelectorAll(".thumbnail-btn");

  // Set total images count
  totalImagesSpan.textContent = images.length;

  // Update the main image
  function updateImage(index) {
    if (index < 0 || index >= images.length) return;

    currentIndex = index;
    const imageUrl = images[index];

    // Fade out current image
    mainImage.style.opacity = "0";

    // Update image source after fade out
    setTimeout(() => {
      mainImage.src = imageUrl;
      mainImage.style.opacity = "1";
    }, 250);

    // Update counter
    currentImageSpan.textContent = index + 1;

    // Update thumbnail active state
    thumbnailBtns.forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    // Update navigation button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;
  }

  // Navigation functions
  function goToPrevious() {
    if (currentIndex > 0) {
      updateImage(currentIndex - 1);
    }
  }

  function goToNext() {
    if (currentIndex < images.length - 1) {
      updateImage(currentIndex + 1);
    }
  }

  function goToImage(index) {
    updateImage(index);
  }

  // Event listeners
  prevBtn.addEventListener("click", goToPrevious);
  nextBtn.addEventListener("click", goToNext);

  // Thumbnail click handlers
  thumbnailBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => goToImage(index));
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goToPrevious();
        break;
      case "ArrowRight":
        e.preventDefault();
        goToNext();
        break;
      case " ":
        e.preventDefault();
        goToNext();
        break;
    }
  });

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const galleryContainer = document.querySelector(".gallery-container");

  galleryContainer.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  galleryContainer.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - go to next image
        goToNext();
      } else {
        // Swipe right - go to previous image
        goToPrevious();
      }
    }
  }

  // Initialize
  updateImage(0);

  // Auto-play functionality (optional)
  let autoPlayInterval = null;
  const autoPlayDelay = 5000; // 5 seconds

  function startAutoPlay() {
    if (images.length <= 1) return;

    autoPlayInterval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        goToNext();
      } else {
        updateImage(0); // Loop back to first image
      }
    }, autoPlayDelay);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  // Pause auto-play on user interaction
  galleryContainer.addEventListener("click", stopAutoPlay);
  galleryContainer.addEventListener("touchstart", stopAutoPlay);

  // Resume auto-play after 10 seconds of inactivity
  let inactivityTimer = null;

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      startAutoPlay();
    }, 10000);
  }

  // Start auto-play initially
  resetInactivityTimer();

  // Reset timer on any interaction
  galleryContainer.addEventListener("click", resetInactivityTimer);
  galleryContainer.addEventListener("touchstart", resetInactivityTimer);
  document.addEventListener("keydown", resetInactivityTimer);
});
