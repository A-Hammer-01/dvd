var rightSide;
var lowerSide;
var x = 18;
var y = 45;
var iX = [1, -1];
var iY = [1, -1];
var p = 0;
var r = 0;
var col1 = 0;
var col2 = 0;
var col3 = 0;
var speed = 3;
var border = speed - 1;


function setup() {
    createCanvas(windowWidth, windowHeight);
    rightSide = width-(83 + border);
    lowerSide = height-(26 + border);
  }
  
  //draw dvd
  var dvd = function(x, y) {
    noStroke();
    fill(x/255*300, y/255*50, x/255*70);
    rect(x-3, y - 30, 70, 40);
    textSize(30);
    fill(255, 255, 255);
    text("DVD", x, y);
    
  }
function draw() {
    //border
    strokeWeight(30);
    stroke(col1, col2, col3);
    fill(255, 255, 255);
    rect(0, 0, width, height);
    
    //dvd
    dvd(x, y);
    
    //speed and direction
    x += iX[p]*speed;
    y += iY[r]*speed;

    //change of direction
    if (x > rightSide) {
      p = 1;
    }
    if (y > lowerSide) {
      r = 1;
    }
    if (x < 18 + border) {
      p = 0;
    }
    if (y < 46 + border) {
      r = 0;
    }

    //colour change if dvd hits corner
    
    //bottom right
    if (x > rightSide && y > lowerSide) {
      col1 = x/255*300;
      col2 = y/255*50;
      col3 = x/255*70;
    } else {
        col1 = 0;
        col2 = 0;
        col3 = 0;
      }

    //top left
    if (x + border < 12 && y + border < 45) {
      col1 = x/255*300;
      col2 = y/255*50;
      col3 = x/255*70;
    } else {
        col1 = 0;
        col2 = 0;
        col3 = 0;
      }
    
    //top right
    if (x > rightSide && y + border < 95) {
      col1 = x/255*300;
      col2 = y/255*50;
      col3 = x/255*70;
    } else {
        col1 = 0;
        col2 = 0;
        col3 = 0;
      }

    //bottom left
    if (y > lowerSide && x + border < 18) {
      col1 = x/255*300;
      col2 = y/255*50;
      col3 = x/255*70;
    } else {
        col1 = 0;
        col2 = 0;
        col3 = 0;
      }
  }
