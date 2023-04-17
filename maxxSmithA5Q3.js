let babySpeed = 3;
let milkSpeed = 3;

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  colorMode(HSL);

  babies = [];
  skinColors = [
    "tan",
    "wheat",
    "navajowhite",
    "bisque",
    "moccasin",
    "papayawhip",
    "burlywood",
    "peru",
    "sienna",
  ];

  milks = [];
  
  bubbles = [];

  for (let babiesDrawn = 0; babiesDrawn < 3; babiesDrawn++) {
    let thisX = random(width - 190);
    let thisY = random(height - 150);
    let thisColor = random(skinColors);
    let thisSize = 0.8;
    babies[babiesDrawn] = new Baby(thisX, thisY, thisColor, thisSize);
  }
  for (let milksDrawn = 0; milksDrawn < 5; milksDrawn++) {
    let thisX = random(width - 100);
    let thisY = random(height - 150);
    let thisSize = 0.8;
    milks[milksDrawn] = new Milk(thisX, thisY, thisSize);
  }
  for (let bubblesDrawn = 0; bubblesDrawn < 100; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisSize = random(0.8, 1)
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY, thisSize);
   }
}

function draw() {
  background("midnightblue");
  
  for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++){
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
  for (let babiesShown = 0; babiesShown < babies.length; babiesShown++) {
    babies[babiesShown].move();
    babies[babiesShown].show();
    babies[babiesShown].update();
  }
  for (let milksShown = 0; milksShown < milks.length; milksShown++) {
    milks[milksShown].move();
    milks[milksShown].show();
    milks[milksShown].update();
  }
}

class Baby {
  constructor(x, y, hue, size) {
    this.x = x;
    this.y = y;
    this.addX = babySpeed;
    this.color = hue;
    this.size = size;
    this.crawl = 4;
    this.isCrawlingLeft = false;
  }
  update() {
    let tooFarLeft = this.x > width - 190;
    let tooFarRight = this.x < 0;

    if (tooFarLeft || tooFarRight) {
      this.addX *= -1;
      this.isCrawlingLeft = !this.isCrawlingLeft;
    }

    this.crawl = (this.crawl + 1) % 5;
  }
  move() {
    this.x = this.x + this.addX;
  }
  show() {
    push();
    // let d = +1;
    // if (this.isCrawlingLeft){
    //   d = -d
    // }
    noStroke();
    translate(this.x, this.y);
    scale(this.size);
    push();
    translate(-71, -185);
    rotate(10);
    noStroke();
    fill(this.color);
    ellipse(300, 200, 100);
    push();
    translate(150, 250);
    rotate(-30);
    rect(0, 0, 150, 100, 50);
    pop();
    push();
    fill("white");
    translate(150, 250);
    rotate(-30);
    rect(0, 0, 60, 100, 50, 0, 0, 50);
    pop();
    push();
    translate(280, 260);
    rect(0, 0, 20, 70, 10);
    pop();
    push();
    translate(280, 260);
    rotate(-30);
    rect(0, 0, 20, 70, 10);
    pop();
    push();
    translate(190, 270);
    rotate(30);
    rect(0, 0, 40, 70, 20);
    pop();
    rect(130, 309, 60, 35, 20);
    push();
    translate(-20, 0);
    fill("white");
    ellipse(320, 190, 25);
    fill("black");
    ellipse(323, 190, 15);
    pop();
    push();
    translate(10, 0);
    fill("white");
    ellipse(320, 190, 25);
    fill("black");
    ellipse(323, 190, 15);
    pop();
    push();
    fill("white");
    arc(320, 210, 40, 30, 0, 180);
    pop();
    push();
    translate(300, 140);
    stroke("saddlebrown");
    rotate(-10);
    strokeWeight(5);
    line(0, 0, 0, 20);
    pop();
    pop();
    pop();
  }
}

class Milk {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.addX = milkSpeed;
    this.size = size;
  }
  update() {
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width - 100;

    if (tooFarLeft || tooFarRight) {
      this.addX *= -1;
    }
  }
  move() {
    this.x = this.x + this.addX;
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    noStroke();
    push();
    translate(-100, -60);
    fill("white");
    rect(100, 145, 60, 45, 10);
    push();
    fill(0, 100, 100, 0.8);
    rect(100, 100, 60, 90, 10);
    pop();
    push();
    fill("khaki");
    rect(120, 60, 20, 40, 20);
    pop();
    push();
    fill("lightblue");
    rect(105, 85, 50, 20);
    pop();
    pop();
    pop();
  }
}

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  move() {
    this.x = this.x + random(4, -4);
    this.y = this.y + random(4, -4);
  }
  show() {
    push();
    stroke('white');
    strokeWeight(1);
    noFill();
    translate(this.x, this.y);
    scale(this.size);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = this.color;
    ellipse(0, 0, 20);
    pop();
  }
}
