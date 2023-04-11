let akzidenz;
let angle=0; 

function preload() {
  akzidenz = loadFont('Akzidenz-grotesk-bold.ttf');
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
background(0); 
blendMode(DIFFERENCE); 
  let x = 500 + cos(angle) * 300; 
  let y = 550 + sin(angle) * 300; 
  translate(x, y); 
  fill (0,0,255,50); 
  textSize(300);
  text("t", 0, 0); 
  angle += 0.2;
  angle += 0.5;
  fill (255,0,255,50); 
  textSize(100);
  text("t", 0, 0); 
  fill (0,255,255,50); 
  textSize(500);
  text("t", 0, 0); 
 
 








 
 
}
