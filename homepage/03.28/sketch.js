let Zighead; 
function preload(){
  Zighead =
loadFont('Zighead.otf'); 
}
function setup() {
  createCanvas(1000, 1000,WEBGL); 
  textFont(Zighead); 
  textSize(500); 
  //textAlign(CENTER, CENTER); 

}

function draw() {
 //background(255); 
  let time = millis(); 
  rotateX(time / 5000); 
  rotateZ(time / 5234); 
  fill(255,0,0); 
  text('T',10,10);  
  fill(0,255,0);
  text('T', 35,10); 
  fill(0,0,255); 
  text('T', 55,10); 


}