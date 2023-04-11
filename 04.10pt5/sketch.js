let letters = [];
const letterCount = 50; 
const letterSize = 80; 
const letterSpeed = 5; 
let time = 0; 
let amplitude = 0.2; 
let frequency = 0.05;

function preload() {
  akzidenz = loadFont('Akzidenz-grotesk-bold.ttf');
}

function setup() {
  createCanvas(1000,1000);
  textFont(akzidenz);
  textSize(letterSize);

  for (let i = 0; i < letterCount; i++) {
    letters.push({
      x: random(width),
      y: random(-500, 0),
      letter: "T",
    });
  }
}

function draw() {
 // background(255);
  fill(50,50,200,80);

  
  for (let i = 0; i < letterCount; i++) {
 
    let scaleFactor = 1 + sin(time + i) * amplitude;
    let letterSizeScaled = letterSize * scaleFactor;

   
    textSize(letterSizeScaled);
    text(letters[i].letter, letters[i].x, letters[i].y);

   
    letters[i].y += letterSpeed;

  
    if (letters[i].y > height) {
      letters[i].y = random(-500, 0);
      letters[i].x = random(width);
    }
  }

  
  time += frequency;
}
