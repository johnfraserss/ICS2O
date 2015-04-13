/************************************
 *** Below is a template for      ***
 *** your second Processing       ***
 *** assignment.  There are       ***
 *** some variables and functions ***
 *** provided for you.  You       ***
 *** are to fill in the blank     ***
 *** sections to complete your    ***
 *** work.                        ***
 ************************************/

boolean linesOnly;
//add in variables as need be here

void setup() {
  size (600, 600);
  linesOnly = true;
  //add in any initialization information here
  
}

void draw() {
  if (linesOnly == true) {

    //draw the lines portion here
    
  }
  else {
    
    //draw the lines+circles portion here
    
  }
}

//There's no need to change this function
void mousePressed() {
  if (mouseButton == LEFT) {
    linesOnly = true;
  } else {
    linesOnly = false;
  }
}
