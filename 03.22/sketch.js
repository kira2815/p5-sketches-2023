function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw(){
  background(0);
  fill (150,50,90);
  camera(50,100,300);
  
  translate(20,0,50); 
  rotateY(radians(30));          
  scale(2);

  box(10);
//next box
  fill (130,50,90);
  camera(50,100,300);
  
  translate(20,0,90); 
  rotateY(radians(90));          
  scale(2);

  box(10);
//next box
  fill (130,90,50);
  camera(50,100,300);
  
  translate(40,0,100); 
  rotateY(radians(20));          
  scale(2);

  box(8);
//next box
  fill (100,50,40);
  camera(50,100,300);
  
  translate(40,0,60); 
  rotateY(radians(90));          
  scale(2);

  box(10);
//next box
  fill (10,20,70);
  camera(50,100,300);
  
  translate(40,0,10); 
  rotateY(radians(30));          
  scale(2);

  box(10);
//next box
  fill (0,30,200);
  camera(50,100,300);
  
  translate(40,0,10); 
  rotateY(radians(30));          
  scale(2);

  box(10);
//next box
  fill (20,90,50);
  camera(50,100,300);
  
  translate(20,25,60); 
  rotateY(radians(30));     
  rotateX(radians(40)); 
  scale(2);

  box(8);
//next box
  fill (130,80,50);
  camera(50,100,300);
  
  translate(40,35,60); 
  rotateY(radians(20));          
  scale(2);

  box(8);
//next box
  fill (100,30,50);
  camera(50,100,300);
  
  translate(10,15,-30); 
  rotateY(radians(-20));          
  scale(2);

  box(12);
//next box
  fill (80,40,190);
  camera(50,100,300);
  
  translate(40,20,-30); 
  rotateY(radians(30));  
  rotateX(radians(20));     
  scale(2);

  box(12);
//next box
  fill (20,70,190);
  camera(50,100,300);
  
  translate(7,35,-20); 
  rotateY(radians(-10));  
  rotateX(radians(-40));     
  scale(2);

  box(11);
//next box
  fill (100,0,90);
  camera(50,100,300);
  
  translate(38,33,-30); 
  rotateY(radians(-40));  
  rotateX(radians(-40));     
  scale(2);

  box(11);
//next box
  fill (100,80,5);
  camera(50,100,300);
  
  translate(7,50,-30); 
  rotateY(radians(80));  
  rotateX(radians(150));     
  scale(2);

  box(12);
//next box
  fill (10,90,90);
  camera(50,100,300);
  
  translate(40,50,-30); 
  rotateY(radians(30));  
  rotateX(radians(100));     
  scale(2);

  box(12);
 //next box
  fill (150,50,100);
  camera(50,100,300);
  
  translate(40,70,-30); 
  rotateY(radians(60));  
  rotateX(radians(-80));     
  scale(2);

  box(12);
//next box
  fill (50,50,90);
  camera(50,100,300);
  
  translate(10,70,-30); 
  rotateY(radians(30));  
  rotateX(radians(-30));     
  scale(2);

  box(12);
//next box
  fill (90,60,30);
  camera(50,100,300);
  
  translate(10,90,-30); 
  rotateY(radians(60));  
  rotateX(radians(30));     
  scale(2);

  box(12);
//next box
  fill (10,20,80);
  camera(50,100,300);
  
  translate(40,90,-30); 
  rotateY(radians(20));  
  rotateX(radians(30));     
  scale(2);

  box(10);
//top half
  fill (10,20,80);
  camera(50,100,300);

  translate(-30,-90,-30); 
  rotateY(radians(70));  
  rotateX(radians(10));     
  scale(2);

  box(16);
//next box
  fill (150,10,100);
  camera(50,100,300);

  translate(-50,-90,-30); 
  rotateY(radians(40));  
  rotateX(radians(10));     
  scale(2);

  box(16);
//next box
  fill (50,100,100);
  camera(50,100,300);
  
  translate(-5,-90,-30); 
  rotateY(radians(20));  
  rotateX(radians(30));     
  scale(2);

  box(16);
//next box
  fill (100,150,90);
  camera(50,100,300);
  
  translate(20,-90,-30); 
  rotateY(radians(40));  
  rotateX(radians(50));     
  scale(2);

  box(16);
//next box
  fill (100,10,150);
  camera(50,100,300);
  
  translate(50,-90,-30); 
  rotateY(radians(20));  
  rotateX(radians(50));     
  scale(2);

  box(16);
//next box 
  fill (10,100,80);
  camera(50,100,300);

  translate(80,-90,-30); 
  rotateY(radians(90));  
  rotateX(radians(20));     
  scale(2);

  box(16);
}

