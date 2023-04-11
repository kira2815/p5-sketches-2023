function setup() {
  createCanvas(1000, 1000); 
}

function draw() {
  // background(10,100,50);
  push(); 
  noStroke(); 
  translate(500, 400); 
  rotate(frameCount * 0.002);
  fill (255,50,100);
  ellipse(0, 0, 100, 100); 
  ellipse(0, 100, 100, 100); 
  ellipse(0, 200, 100, 100); 
  ellipse(0, 300, 100, 100); 
  ellipse(-100, 0, 100, 100); 
  ellipse(100, 0, 100, 100); 
  
  pop(); 
}