let c; 
function setup() {
   c = createCanvas(1000, 1000);
    background(205,50,30);
    fill(15,20,45,0);
    stroke(5,150,30);
    rect(500,500,50,150);
  }

  function mousePressed() {
    saveCanvas (c, "sketch", "png")
  }