const car = document.getElementById('car');

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    moveCar('right');
  } else if (event.code === 'ArrowLeft') {
    moveCar('left');
  }
});

function moveCar(direction) {
  const currentPos = parseInt(car.style.left) || 0;
  const newPos = direction === 'right' ? currentPos + 10 : currentPos - 10;
  if (newPos >= 0 && newPos <= window.innerWidth - car.offsetWidth) {
    car.style.left = newPos + 'px';
  }
}