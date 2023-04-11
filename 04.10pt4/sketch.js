let message = "T";
let x = 500;
let y = 100;
let size = 500;

function setup() {
  createCanvas(1000, 1000);
  textSize(size);
  textAlign(CENTER, CENTER);
  fill(0,20);
}

function draw() {
 //background(0);
  for (let i = 0; i < message.length; i++) {
    let letter = message.charAt(i);
    let letterWidth = textWidth(letter);
    let jitter = random(-5, 10);
    
    push();
    translate(x + (i * size), y);
    rotate(jitter * 0.1);
    text(letter, 0, 0);
    pop();
    
    y += 5;
  }
}
