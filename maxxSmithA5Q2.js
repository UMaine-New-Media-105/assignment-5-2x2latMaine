let starPoints;

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  
  stars = [];
  starColors = ['yellow', 'palegoldenrod', 'gold', 'goldenrod', 'khaki'];

   for (let starsDrawn = 0; starsDrawn < 50; starsDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisColor = random(starColors);
    let thisSize = random(0.5, 0.8)
    starPoints = random(4, 9);
    stars[starsDrawn] = new Star(thisX, thisY, thisColor, thisSize);
   }

}


function draw() {
  background("midnightblue");
  
  for (let starsShown = 0; starsShown < stars.length; starsShown++){
    stars[starsShown].move();
    stars[starsShown].show(5);
  }

}

class Star {
  constructor(x, y, hue, size) {
    this.x = x;
    this.y = y;
    this.color = hue;
    this.size = size;
  }
  move() {
    this.x = this.x + random(4, -4);
    this.y = this.y + random(4, -4);
  }
  show(points) {
    push();
    noStroke();
    fill(this.color);
    translate(this.x, this.y);
    scale(this.size);
    for (let pointsDrawn = 0; pointsDrawn < points; pointsDrawn++) {
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = this.color;
      triangle(0, -20, 10, 0, -10, 0);
      rotate(360 / points);
    }
    pop();
  }
}
