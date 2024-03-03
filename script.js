document.addEventListener("DOMContentLoaded", function() {
  const rollingImages = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image URLs
  const interval = 2000; // Change image every 3 seconds (adjust as needed)
  let index = 0;

  function changeImage() {
    const rollingImage = document.querySelector('.rolling-image');
    rollingImage.src = rollingImages[index];
    index = (index + 1) % rollingImages.length;
  }

  // Change image at specified interval
  setInterval(changeImage, interval);
});
