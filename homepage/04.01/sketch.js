let akzidenz;
let scaleAmount = 50;
let angle = 0;

function preload() {
  akzidenz = loadFont('Akzidenz-grotesk-bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  //background(255);
blendMode(DIFFERENCE); 
  push();
  translate(width / 2, height / 2);
  scale(1, scaleAmount); 
  rotate(angle);
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(255,0,0); 
  text("T", 0, 0);
  pop();
  
  push(); 
  translate(width / 2, height / 2);
  scale(scaleAmount, 1); 
  rotate(-angle);
  textSize(300);
  textAlign(CENTER, CENTER);
  fill(0,255,0); 
  text("T", 20, 400);
  pop();

  push(); 
  translate(width / 2, height / 2);
  rotate(angle);
  scale(1, -scaleAmount);
  textSize(200);
  textAlign(CENTER, CENTER);
  fill(255,0,0); 
  text("T", 300, 10);
  pop();
  
  push(); 
  //translate(width / 2, height / 2);
  rotate(-angle);
  scale(scaleAmount, 1); 
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0,0,255); 
  text("T", 40, 500);
  pop();

  // increase the scale and angle over time
  scaleAmount += 0.05;
  angle += 0.10;

  // reset the scale and angle when they get too large
  if (scaleAmount > 50) {
    scaleAmount = 1;
  }
  if (angle > TWO_PI) {
    angle = 0;
  }
}

