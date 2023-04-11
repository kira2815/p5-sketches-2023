var art;
var source;

function preload() {
  art = loadStrings('banner.txt');
  source = loadFont('SourceCodePro-Medium.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textSize(7);
  textAlign(CENTER, CENTER);
  textFont(source); 
}

function draw() {
 // background(0);
  fill(0);

  for (var i = 0; i < art.length; i++) {
    var xPos = width/2 + map(mouseX, 0, width, -50, 50);
    var yPos = (i+5)*textSize() + map(mouseY, 0, height, -50, 50);
    text(art[i], xPos, yPos);
  }
}


