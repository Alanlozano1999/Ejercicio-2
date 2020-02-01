let x=400;
let y=400;
let d=1;
let label= "P*to";
let counter = 0;



function setup() {
  createCanvas(800, 800)
  background(150,0,50);
}

function draw() {
  //background(255,0,255);
  stroke(random(100,255),random(0,100),random(100,255),10);
  //noStroke();
  fill(random(100,255),random(0,100),random(100,255),10);
  ellipse(x, y, d, d);
  
  fill (random(100,255),random(0,100),random(100,255));
  textAlign( CENTER, CENTER);
  textSize(d/5);
  //text(label + " " + counter, x, y);
  text(label, x, y);
  
  
  counter++;
  //console.log(counter);
  
  //d = d + 1;
  //d += 1;
  //d ++
  
  
  //x = random (0, width);
  //y = random (0, height);
  d = dist (width, height, mouseX, mouseY);
  
  
  
  
}
