/*
 * Example of using basics
 */

function setup() {
  createCanvas(500, 500);
}

//draw a circle and rectangle of different colors
function draw() {
  background(0); //black background
  
  fill(25, 255, 255);
  ellipse(50, 50, 75, 25);
  
  fill(150);
  rect(250, 250, 50, 50);
}