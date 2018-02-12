function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
}
var angle = 0;
function draw() {
 // background(0);
  r = Math.floor(Math.random()*256);
  g = Math.floor(Math.random()*256);
  b = Math.floor(Math.random()*256); 
  translate(width/2,height/2);
  stroke(r,g,b);
  rotate(angle);
  line(0,300,0,-300);
  angle+=mouseX/50;
  // put drawing code here
}
