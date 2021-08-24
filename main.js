const myPics = document.getElementById("draw");
const context = myPics.getContext("2d");

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.
// Add the event listeners for mousedown, mousemove, and mouseup

context.strokeStyle = "#7DEDFF";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 10;
let hue = 0;
let direction = true;
function draw(e) {
  if (!isDrawing) return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [x, y] = [e.offsetX, e.offsetY];
  context.closePath();
  hue++;
  console.log(context.lineWidth);

  // This block of code insures that the lineWidth property is always between 1 and 80;
  if (context.lineWidth >= 80 || context.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? context.lineWidth++ : context.lineWidth--;
}

myPics.addEventListener("mousedown", (e) => {
  [x, y] = [e.offsetX, e.offsetY];
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => draw(e));
myPics.addEventListener("mouseup", () => (isDrawing = false));
myPics.addEventListener("mouseout", () => (isDrawing = false));
