/*
  Description: This program draws random circles
  Author: Mr. Seidel
  Date of last edit: Nov 15, 2020
*/

function setup() {
  createCanvas(600, 600);
}

function draw() {
  //create a randomly coloured circle in a random position on the screen
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), 25, 25);
  
  //draws a rectangle in the center of the screen with a black fill
  fill(0);
  rect(width/2, height/2, 10, 10);
}

  