let zig; 

function preload(){
  zig =
loadFont('Zighead.otf'); 
}
function setup() {
  createCanvas(1000, 1000,WEBGL); 
  textFont(zig); 
  textSize(500); 
  //blendMode(MULTIPLY); 
  //textAlign(CENTER, CENTER); 

}

function draw() {
//background(0); 
let time = millis(); 
  rotateX(time / 1000); 
  rotateZ(time / 734);
fill(0,200,50,40); 
text('T', 20,20); 
fill(0,0,200,40); 
text('T', 200,600);






}