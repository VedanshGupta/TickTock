//calculating time using predefined functions from p5.js.
var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);

  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(sc, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  rotate(mnAngle);
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  arc(400,200, 15, 15, );
  drawSprites();
}