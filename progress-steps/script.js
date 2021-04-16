const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCircle = 1;

next.addEventListener('click', () => {
  // If it is not last circle
  if (activeCircle < circles.length) {
    activeCircle++;
  }

  updateProgress();
});

prev.addEventListener('click', () => {
  // If it is not first circle
  if (activeCircle > 1) {
    activeCircle--;
  }

  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < activeCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');

  // 4 points cut into 3 pieces.
  progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%'

  disableButton();

}

// Disables Button 
function disableButton () {
  if (activeCircle === 1) {
    prev.disabled = true;
  } else if (activeCircle === circles.length) {
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }
} 
