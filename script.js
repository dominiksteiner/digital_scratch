const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

function drawScratch(event) {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ctx.clearRect(x - 10, y - 10, 20, 20); // Adjust the scratch size
}

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  drawScratch(event);
});

canvas.addEventListener('mousemove', (event) => {
  drawScratch(event);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
