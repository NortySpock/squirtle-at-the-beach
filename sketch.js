var img;  // Declare variable 'img'
var squirtle;

var squirtleX;
var squirtleY;

function setup() {
  createCanvas(900, 900);
  img = loadImage("beach.jpg");  // Load the image
  squirtle = loadImage("squirtle2.gif");
  
  squirtleX = 200;
  squirtleY = 200;
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height/2, img.width/2, img.height/2);
  image(squirtle, squirtleX, squirtleY);
}

function mouseMoved() {
  squirtleX = mouseX;
  squirtleY = mouseY;
}