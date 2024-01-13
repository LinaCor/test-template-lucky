let flagsContainer = document.querySelector('.legend__flags');
let allFlags = flagsContainer.querySelectorAll('.flag');
let coordinatesFlags = [
  {
    top: '250px',
    left: '-25px',
  },
  {
    top: '80px',
    left: '-15px',
  },
  {
    top: '-25px',
    left: '210px',
  },
  {
    top: '90px',
    left: '380px',
  },
  {
    top: '250px',
    left: '420px',
  },
];
let counter = 0;

function changeCoordinats(flags, coordinate) {
  const elem = flags[counter];
  const index = Array.from(flags).indexOf(elem);
  elem.style.top = coordinate[index].top;
  elem.style.left = coordinate[index].left;
}

setTimeout(() => {
  let isFinished = false;
  let intervalId = setInterval(function () {
    if (!isFinished) {
      changeCoordinats(allFlags, coordinatesFlags);
      counter++;
      if (counter === 5) {
        isFinished = true;
      }
    } else {
      clearInterval(intervalId);
      flagsContainer.style.animation = 'circle 5s linear infinite';
    }
  }, 400);
}, 3000);

