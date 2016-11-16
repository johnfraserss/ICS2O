/*
 * Author: Mr. Seidel
 * Revision Date: Oct 10, 2016
 * Program Name: Moving Arcs - Assignment #1 (ICS2O)
 * Program Description:
 *         Program developed for students to show their knowledge of 
 *         the basics of programming up to, and including, if statements.
 *
 */

float x, y, previousX, previousY;        //used for positioning
float xSpeed, ySpeed;                    //used for speed/velocity of the line/point
float redValue, greenValue, blueValue;   //used for the red/green/blue colour choices
float rotationAmount, rotationSpeed;     //used for the arcs and rotation values 

void settings() {
  size(600, 600);
}

void setup() {
  //starting position for the moving line/point
  x = width/2;
  y = height/2;
  
  //starting speed for the moving line/point
  xSpeed = random(-15, 15);
  ySpeed = random(-15, 15);
  
  //starting colours
  redValue = greenValue = blueValue = 255;
  
  //starting values for the arcs
  rotationAmount = 90;
  rotationSpeed = 1;
}

void draw() {
  
  //set fill and stroke values for the point/line
  fill(redValue, greenValue, blueValue);
  stroke(redValue+50, greenValue+50, blueValue+50);
  strokeWeight(10);
  
  //deals with what happens what the point/line hits a wall
  if ((x > width - 25) || (x < 25)) {
    xSpeed *= -1;
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);
  }
  if ((y > height - 25) || (y < 25)) {
    ySpeed *= -1;
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);
  }
  
  //draws a line from the previous position to the new position
  previousX = x;
  previousY = y;
  x += xSpeed;
  y += ySpeed;
  fill(redValue, greenValue, blueValue);
  strokeWeight(5);
  point(x, y);
  line(x, y, previousX, previousY);
  
  //draws the right arc
  strokeWeight(20);
  arc(width, height/2, width, height, radians(rotationAmount), radians(rotationAmount+0.07));
  
  //draws the left arc
  stroke(random(255), random(255), random(255));
  arc(0, height/2, width, height, radians(rotationAmount+180), radians(rotationAmount+180.07));
  
  //updates position of the left arc
  rotationAmount += rotationSpeed;
  
  //deals with the boundaries of the arc and changes direction
  if (rotationAmount > 270 || rotationAmount < 90) {
    rotationSpeed *= -1;
  }
}

//when mouse is clicked, change the point/line's direction
void mouseClicked() {
  xSpeed = random(-15, 15);
  ySpeed = random(-15, 15);
}

//when key is pressed, change the background
void keyPressed() {
  background(random(255), random(255), random(255));
}