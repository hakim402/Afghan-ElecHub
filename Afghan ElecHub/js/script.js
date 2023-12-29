document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("product-carousel");
  const container = carousel.querySelector(".carousel-container");
  const items = container.querySelectorAll(".col-md-3");
  const totalItems = items.length;
  let currentIndex = 0;

  function showItem(index) {
    const position = -index * 100 + "%";
    container.style.transform = "translateX(" + position + ")";
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  }

  // Add event listeners for next and previous buttons
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", next);
  carousel.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Prev";
  prevButton.addEventListener("click", prev);
  carousel.appendChild(prevButton);
});
