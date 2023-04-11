
let xoff = 0.0;
let yoff = 0.0;

function setup() {
  noiseSeed(10);
  stroke(0,10);
  createCanvas(1000, 1000); 
}

function draw() {
 
  noFill(); 
  
  xoff = xoff + 0.01;
  let x = noise(xoff) * width;

  
  strokeWeight(3);
  beginShape();
  vertex(width/2 + x, 0);
  for (let y = 0; y <= height; y += 10) {
    x = noise(xoff) * 40 - 20; 
    vertex(width/2 + x, y);
    xoff += 0.05; 
  }
  vertex(width/2 + x, height);
  endShape();

  
  yoff = yoff + 0.01;
  let y = noise(yoff) * height;

 
  strokeWeight(3);
  beginShape();
  vertex(0, height/2 + y);
  for (let x = 0; x <= width; x += 10) {
    y = noise(yoff) * 20 - 10; 
    vertex(x, height/2 + y);
    yoff += 0.05; 
  }
  vertex(width, height/2 + y);
  endShape();
}

