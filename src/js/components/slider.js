document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const sliderContainer = document.querySelector('.slider-container');

  // --- 1. Intersection Observer Logic ---

  // Configuration for the observer
  const options = {
    root: sliderContainer, // Observes intersections relative to the viewport
    rootMargin: "0px",
    threshold: 0.6, // Triggers when 60% of the slide is visible
  };

  // The callback function that runs when a threshold is crossed
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      // When a slide is 60% in view
      if (entry.isIntersecting) {
        // Get the ID of the intersecting slide (e.g., "slide-1")
        const currentSlideId = entry.target.id;

        sliderContainer.scrollIntoView({ behavior: "smooth" });

        // Find the navigation dot that corresponds to this slide
        const activeDot = document.querySelector(
          `.dot[data-slide="${currentSlideId}"]`
        );

        // Remove 'active' class from all dots
        dots.forEach((d) => d.classList.remove("active"));

        // Add 'active' class to the matching dot
        if (activeDot) {
          activeDot.classList.add("active");
        }

        // Optional: Add an 'active' class to the slide itself
        // This is useful if you want to animate the quote card
        // only when the slide is active.
        slides.forEach((s) => s.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(observerCallback, options);

  // Tell the observer to watch each slide
  slides.forEach((slide) => {
    observer.observe(slide);
  });

  // --- 2. Dot Click Navigation ---
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      // Get the target slide ID from the dot's 'data-slide' attribute
      const targetId = dot.dataset.slide;
      const targetSlide = document.getElementById(targetId);

      if (targetSlide) {
        // Scroll smoothly to that slide
        targetSlide.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
