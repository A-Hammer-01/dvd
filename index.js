function setup() {
  createCanvas(windowWidth, windowHeight);
}



var dvd = function(x, y) {
  noStroke();
  fill(x/255*300, y/255*50, x/255*70);
  rect(x-3, y - 30, 70, 40);
  textSize(30);
  fill(255, 255, 255);
  text("DVD", x, y);
  
}
var x = 68;
var y = 95;
var iX = [1, -1];
var iY = [1, -1];
var p = 0;
var r = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;


function draw() {
  strokeWeight(30);
  stroke(col1, col2, col3);
  fill(255, 255, 255);
  rect(50, 50, width-100, height-100);
  dvd(x, y);
  x += iX[p];
  y += iY[r];
  if (x > width-132) {
    p = 1;
  }
  if (y > height-75) {
    r = 1;
  }
  if (x < 68) {
    p = 0;
  }
  if (y < 95) {
    r = 0;
  }
  if (x > width-132 && y > height-75) {
    col1 = x/255*300;
    col2 = y/255*50;
    col3 = x/255*70;
  } else {
      col1 = 0;
      col2 = 0;
      col3 = 0;
    }
  if (x < 69 && y < 96) {
    col1 = x/255*300;
    col2 = y/255*50;
    col3 = x/255*70;
  } else {
      col1 = 0;
      col2 = 0;
      col3 = 0;
    }
  if (x > width-132 && y < 95) {
    col1 = x/255*300;
    col2 = y/255*50;
    col3 = x/255*70;
  } else {
      col1 = 0;
      col2 = 0;
      col3 = 0;
    }
  if (y > height-75 && x < 68) {
    col1 = x/255*300;
    col2 = y/255*50;
    col3 = x/255*70;
  } else {
      col1 = 0;
      col2 = 0;
      col3 = 0;
    }
  
}
