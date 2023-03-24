let button; 
function setup() {
  createCanvas(1000, 1000, WEBGL)
  button = createButton('click me');
  button.position(200, 100);
  button.mousePressed(changeFill);
  button.size(100,50);
}

function changeFill() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  fill(r, g, b);
}

function draw(){
 
    background(255);
    
    
    rotateY(frameCount * 0.01);
    cylinder(50, 500);
          
    translate(0,-200,0);
    rotateY(frameCount * 0.01);
    cylinder(180, 50);
  
}

