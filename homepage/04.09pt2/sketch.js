function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  //background(0);
  noFill();
  stroke(0);

  beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, -5, 5);
    var y = height * noise(nx, mouseY/100.0, mouseX/100.0);

    if (x > width/2 - 20 && x < width/2 + 30) {
      vertex(x, height);
      vertex(x, y);
    } else {
      vertex(x, y);
    }
  }
  endShape();
}

//https://genekogan.com/code/p5js-perlin-noise/ perlin noise code altered from here