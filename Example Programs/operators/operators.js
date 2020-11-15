/*
 * There are different operators you can use in programming
 * The following are examples of some operators
 *
 */

const firstFloatNumber = 5.3;
const secondFloatNumber = 2.2;
const firstIntNumber = 5;
const secondIntNumber = 5;
let info;

function setup() {
  createCanvas(500, 500);
  textSize(24);
}

//draw an ever-growing circle
function draw() {
  background(255);
  
  text("Float values: " + firstFloatNumber + ", and " + secondFloatNumber, 25, 40);
  
  let floatValue = firstFloatNumber + secondFloatNumber;
  info = "Addition of floats = " + floatValue;
  text(info, 25, 85);

  floatValue = firstFloatNumber - secondFloatNumber;
  info = "Subtraction of floats = " + floatValue;
  text(info, 25, 110);
  
  // You'll notice this breaks (3.0999999... instead of 3.1)
  // to fix this, we can put Number((floatValue).toFixed(1)) 
  // to get 1 decimal point.  Change the number in the
  // brackets of .toFixed(#) to change the amount of
  // decimal places you want.
  
  floatValue = firstFloatNumber * secondFloatNumber;
  info = "Multiplication of floats = " + floatValue;
  text(info, 25, 135);
  
  floatValue = firstFloatNumber / secondFloatNumber;
  info = "Division of floats = " + floatValue;
  text(info, 25, 160);
  
  
  text("Int values: " + firstIntNumber + ", and " + secondIntNumber, 25, 240);
  
  let intValue = firstIntNumber + secondIntNumber;
  info = "Addition of ints = " + intValue;
  text(info, 25, 285);

  intValue = firstIntNumber - secondIntNumber;
  info = "Subtraction of ints = " + intValue;
  text(info, 25, 310);
  
  intValue = firstIntNumber * secondIntNumber;
  info = "Multiplication of ints = " + intValue;
  text(info, 25, 335);
  
  intValue = firstIntNumber / secondIntNumber;
  info = "Division of ints (5 / 2) = " + intValue;
  text(info, 25, 360);
}



/*  
 
 Operators
 --------------
 
 When using numeric variables, the computer will do the mathematical operation as described:
   + is for addition
   - is for subtraction
   * is for multiplication
   / is for division
   
 When completing operations, you can sometime shortform them as below (each pair of lines are equivalent).
   diameter = diameter + 1;
   diameter += 1;
   
   radius = radius - 1;
   radius -= 1;
   
   circleX = circleX * -1;
   circleX *= -1;
   
   circleY = circleY / 2;
   circleY *= 2;
 
 When using non-numeric variables, the operators have different meanings.
 For Strings:
   + is for concatenation (join 2 strings side by side)
   -, *, /, and % have no purpose for Strings
   
 */