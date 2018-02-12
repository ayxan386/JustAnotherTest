function setup() {
  CanvasCreate(400,400);
  rect(50,50,10,10);
 //  background(0);
}

function draw() {
  //translate(0, height);
  fill(255,0,0);
  rect(50,50,10,10);
  for(var i = 0;i<5;i++)
  line(5*i,height,12);
  // put drawing code here
}