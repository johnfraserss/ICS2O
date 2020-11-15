/*
 * Example of using custom variables
 * For information on different variable types,
 * scroll to the bottom of this file.
 */

let diameter; //diameter of circle
const PI = 3.14159265358979;

function setup() {
  createCanvas(500, 500);
  diameter = 5;
}

//draw an ever-growing circle
function draw() {
  background(0);
  fill(255);
  stroke(255);
  ellipse(width/2, height/2, diameter, diameter);
  diameter = diameter + 1; //increase the diameter by 1 every frame of draw()
  
  const info = "Diameter = " + diameter;  // this variable gets creates every time the draw loop occurs, so const works here.
  text(info, 20, 20); //display information about the diameter value in the top left corner

}

//change diameter back to 5 on mouse click
function mousePressed() {
  diameter = 5;
}


/*  

Variable Naming
--------------

The convention for variable naming is as follows:
 - give variables a meaningful name (i.e. diameter, centre, fillColour, etc.)
   - bad examples of names are: a, b, st, amsl, iwejwlk, aa, ab, abc, goat, fish, etc.
 - variables that have multiple "words" in them should follow either camelCase or pot_hole_case style
   - examples include: centreOfTheTriangle, triangleFillColour (camel case)
   -                 : center_of_the_triagle, triangle_fill_colour (pot hole case)
   - whichever method you choose, you have to be consistent in your style choice

Variable types
--------------

There are multiple variable types, as noted below, that we will be using in this class:

 - float (real numbers including decimals)
 - int (whole numbers, both positive and negative)
 - char (a single character - a character can be a letter, number, or symbol on the keyboard)
 - string (a string of characters)
  
 In the example above we use string and float.  The conditionals/if statement example
 will include the 'char' type and the 'int' type.

Let vs. Const
---------------

Let is a variable that you know will (or can) change over time
Const is a variable type that has a constant value, and it's value cannot change once created


*/