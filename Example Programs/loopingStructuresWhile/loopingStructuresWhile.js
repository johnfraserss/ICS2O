const fontSize = 20; //this will be used later on line 8 & 17

function setup() {
  createCanvas(600, 600);
  textSize(fontSize); 
}

//Move the mouse left and right across the screen to see
//what is happening
function draw() {
  background(255);
  let n = 0;
  while (n < mouseX/20) { //sets an increment in which to add 1 to n
    text(n, mouseX + 50, mouseY + n * fontSize); //adds fontSize to help with spacing of the numbers
    n += 1;
  }
}


/*

The generic setup of a while loop is as follows:

while (this is true) {
  //run this code 
}

*/

  