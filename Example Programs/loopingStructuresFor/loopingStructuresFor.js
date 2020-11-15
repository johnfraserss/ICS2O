function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  //another count up example using rectangles
  for (let i = width/2; i < width - 50; i = i + 50) {
    rect(i, 50, 50, 50);
  }
  
  //count down version using ellipses
  for (let i = width/2; i > 50; i = i - 10) {
    ellipse(width/2, height/2, i, i);
  }
}


/*

The generic setup of a for loop is as follows:

for (let i = startValue; i < endValue; i = i + increment) {
  //code here 
}

"let i = startValue;": creates a variable 'i' which will 
                       hold different values within the for 
                       loop, starting at "startValue".  This variable
					   is typically an integer.

"i < endValue;": is the condition (like an if statement)
                 where "while this is true, keep going"
              
"i = i + increment;": is the section where the 'i' value
                      increases based on the increment.
                      Typically this value is 1, and 
                      is normally written in it's short
                      form of 'i++'

*/

  