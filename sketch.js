var hr, min, sc;
var scAngle,minAngle,hrAngle;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES); 

}

function draw() {
  background(0);
  
   //Translation and rotation 
   translate(200,200)
   rotate(-90)

   //calculating time using predefined func from p5
  hr = hour();
  min = minute();
  sc = second();


  scAngle = map(sc,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0)

  //drawing the arcs
  strokeWeight(10);
  noFill();

  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  //Minutes
  stroke("green");
  arc(0,0,280,280,0,minAngle);

  //Hour
  stroke("blue");
  arc(0,0,260,260,0,hrAngle);


}