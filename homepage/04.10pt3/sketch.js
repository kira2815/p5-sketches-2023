function setup() {
  createCanvas(1000, 1000);
  textSize(80); 
}

function draw() {
 // background(255);
  
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  fill(0); 
  text('t', 0, 0);
}
