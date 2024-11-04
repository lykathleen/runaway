// Select the image by its ID
const image = document.getElementById("runawayImage");

image.addEventListener("mouseover", () => {
  // Get the dimensions of the viewport and the image
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  // Calculate new random position, ensuring it stays within bounds
  const newX = Math.random() * (containerWidth - imageWidth);
  const newY = Math.random() * (containerHeight - imageHeight);

  // Move the image to the new position
  image.style.transform = `translate(${newX}px, ${newY}px)`;
});
