function setup() {
  createCanvas(1200,1200);
}

function draw() {
  if (mouseIsPressed === true)
  {
    generatePalette();
  }
}

function generatePalette() {
  for(rectX = 0; rectX <= 8; rectX++){
    fill(random(0,255),random(0,255),random(0,255));
    rect(0 + (rectX * 200),0,200,1200);
  }
}