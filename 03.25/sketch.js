function setup(){
    createCanvas(1000,1000);
}

function draw(){
    background(0); 
    stroke(255,0,0); 
    noFill();
    strokeWeight(random(1,10)); 
    ellipse(500,100,450,80); 
    ellipse(450,110,500,80);
    ellipse(580,120,530,80);
    ellipse(500,500,100,700); 
    ellipse(490,600,90,720); 
    ellipse(515,630,120,620);
}