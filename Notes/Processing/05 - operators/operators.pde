/*
 * There are different operators you can use in programming
 * The following are examples of some operators
 *
 */

float firstFloatNumber, secondFloatNumber;
int firstIntNumber, secondIntNumber;
String info;

void settings() {
  size(500, 500);
}

void setup() {
  textSize(24);
  firstFloatNumber = 5.0;
  secondFloatNumber = 2.0;
  firstIntNumber = 5;
  secondIntNumber = 2;
}

//draw an ever-growing circle
void draw() {
  background(0);
  
  text("Float values: " + firstFloatNumber + ", and " + secondFloatNumber, 25, 40);
  
  float floatValue = firstFloatNumber + secondFloatNumber;
  info = "Addition of floats = " + floatValue;
  text(info, 25, 85);

  floatValue = firstFloatNumber - secondFloatNumber;
  info = "Subtraction of floats = " + floatValue;
  text(info, 25, 110);
  
  floatValue = firstFloatNumber * secondFloatNumber;
  info = "Multiplication of floats = " + floatValue;
  text(info, 25, 135);
  
  floatValue = firstFloatNumber / secondFloatNumber;
  info = "Division of floats = " + floatValue;
  text(info, 25, 160);
  
  
  text("Int values: " + firstIntNumber + ", and " + secondIntNumber, 25, 240);
  
  int intValue = firstIntNumber + secondIntNumber;
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