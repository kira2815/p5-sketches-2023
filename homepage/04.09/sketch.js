var t;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  stroke(0, 15);
  noFill();
  t = 0;
}

function draw() {
  translate(width/2, height/2);
  beginShape();

  // horizontal line of the T
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 50 * noise((i + 200) * 0.05, t * 0.005);
    var x = (rad + 100) * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

// vertical line of the T
  beginShape();
  for (var i = 0; i < 200; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI);
    var rad = 50 * noise((i + 500) * 0.05, t * 0.005);
    var x = rad * cos(ang);
    var y = (rad - 200) * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

  t += 5;


  if (frameCount % 600 == 0) {
    background(255);
  }
}
//https://genekogan.com/code/p5js-perlin-noise/ perlin noise code altered from here