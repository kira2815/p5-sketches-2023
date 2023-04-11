var art;

function preload() {
  art = loadStrings('banner.txt');
}


function setup() {
  createCanvas(1000, 1000);
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);

  for (var i = 0; i < art.length; i++) {
    text(art[i], width/2, (i+1)*textSize());
  }
}
//ASCII ART OF BODONI ORNAMENT THAT APPEARS WHEN LETTER T ON KEYBOARD IS CLICKED