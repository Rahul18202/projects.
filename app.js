const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  lightbox.style.display = 'block';
  lightboxImg.src = images[index].src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(n) {
  currentImageIndex += n;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  lightboxImg.src = images[currentImageIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}

function searchImages() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.gallery-item img');
  items.forEach(img => {
    const match = img.alt.toLowerCase().includes(input);
    img.parentElement.style.display = match ? 'block' : 'none';
  });
}
