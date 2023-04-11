let akzidenz;

function preload() {
  akzidenz = loadFont('Akzidenz-grotesk-bold.ttf');
}


function setup() {
  createCanvas(1000, 1000);
  textSize(300);
  textAlign(CENTER, CENTER);
}

function draw(){

textSize(100)
textFont(akzidenz);

points = akzidenz.textToPoints("T",300,600,800);


    
  for(let i=10; i<points.length; i++) {
   
    let size = random(0, 5);
    let xOffset = random(0, 100);
    let yOffset = random(0, 100);
    line(points[i].x + xOffset, points[i].y - size/10 + yOffset, points[i].x + xOffset, points[i].y + size/1000 + yOffset);
    line(points[i].x - size/2 + xOffset, points[i].y + yOffset, points[i].x + size/2 + xOffset, points[i].y + yOffset);
        
} 
}