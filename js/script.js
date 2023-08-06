const images = document.querySelectorAll('.images img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showImage(index) {
  images.forEach(image => image.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));
  
  images[index].style.display = 'block';
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

showImage(currentIndex);
