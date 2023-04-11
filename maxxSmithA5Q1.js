function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);

  star1 = new star(100, 100, "yellow", random(0.5, 1));
  star2 = new star(200, 200, "white", random(0.5, 1));
  star3 = new star(300, 300, "gold", random(0.5, 1));
  star4 = new star(400, 400, "yellow", random(0.5, 1));
  star5 = new star(500, 500, "white", random(0.5, 1));
}

function draw() {
  background("midnightblue");

  star1.move();
  star1.show(5);
  
  star2.move();
  star2.show(7);
  
  star3.move();
  star3.show(9);
  
  star4.move();
  star4.show(4);
  
  star5.move();
  star5.show(6);
}

class star {
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
