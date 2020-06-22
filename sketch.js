
var r = 0;
var g = 50;
var b = 255;

var sun, spaceShip;
var sunImage , spaceShipImage;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function preload() {
  sunImage = loadImage("sprites/sun.png");
  spaceShipImage = loadImage("sprites/spaceship.png");
}

function setup(){
createCanvas(1200,400);

}


function draw(){
  background(r,g,b);
  push();
  imageMode(CENTER);
  sun = image(sunImage,-60,200); 
  spaceShip = image(spaceShipImage,mouseX,200,300,100);
  pop();

  /* spaceShip = map(mouseX,mouseY,300,100);
  r = map(mouseX,mouseY,300,100);
  g =map(mouseX,mouseY,300,100);
  b = map(mouseX,mouseY,300,100); */
  //spaceShip = map(mouseX, 200, 30, 40, 175);
  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  

  /* fill(255, c, 0);
  rect(width/2, height/2, d, d);
 */
  
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
  r = map(mouseX, 0, 1200, 0,255);
  g = map(mouseX, 0, 1200, 0,255);
  b = map(mouseX, 0, 1200, 0,255);

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.

  
}