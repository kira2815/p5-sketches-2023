let akzidenz;
let scaleAmount = 50;
let angle = 3;

function preload() {
  akzidenz = loadFont('Akzidenz-grotesk-bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
 
  
  let x = width/2;
  let y = height/2;

  let scaleValue = 1;
  
  scaleValue += frameCount/100.0;
  angle += 0.5;
  
  fill(0,0,255,50); 
  textSize(500); 
  textAlign(CENTER, CENTER); 
  scale(scaleValue);
  rotate(angle);
  text ("t",x,y); 
  fill(0,200,200,50); 
  textSize(400)
  text("t", x,y); 
  
  // Reset the animation and start over after 200 frames
  if (frameCount >= 200) {
    scaleValue = 1;
    angle = 3;
    frameCount = 0;
  }
}
