let c;
let ourFont;
let points;


function preload() {
    ourFont = loadFont("JulesMedium.ttf")
}

function setup() {
    c = createCanvas(1000,1000)

    
  

    textSize(100)
    textFont(ourFont);
    
    points = ourFont.textToPoints("T",50,600,800);

    
    
        
      for(let i=0; i<points.length; i++) {
       
        let size = random(10, 30);
        let xOffset = random(-5, 10);
        let yOffset = random(-5, 5);
        line(points[i].x + xOffset, points[i].y - size/10 + yOffset, points[i].x + xOffset, points[i].y + size/2 + yOffset);
        line(points[i].x - size/2 + xOffset, points[i].y + yOffset, points[i].x + size/2 + xOffset, points[i].y + yOffset);
            
    }
        
    

    


    

}


