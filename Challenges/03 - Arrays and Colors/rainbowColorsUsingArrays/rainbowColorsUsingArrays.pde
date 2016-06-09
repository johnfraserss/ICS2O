color [] colors;

void settings() {
  size(600, 600);
}

void setup() {
  colors = new color[6];
  
  colors[0] = color(255, 0, 0);
  colors[1] = color(255, 175, 0);
  colors[2] = color(255, 255, 0);
  colors[3] = color(0, 255, 0);
  colors[4] = color(0, 0, 255);
  colors[5] = color(255, 0, 255);
}

void draw() {
  for (int i = 0; i < colors.length; i = i + 1) {
    fill(colors[i]);
    rect(0, i * height/6, width, height/6);
  }
}