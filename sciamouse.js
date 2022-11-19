let px = 0;
let py = 0;

let ppx = 0;
let ppy = 0;

let pppx = 0;
let pppy = 0;

let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("sciamouse");
}

function draw() {
  clear();
  stroke(255);
  strokeWeight(5);
  line(mouseX, mouseY, px, py);
  line(ppx, ppy, px, py);
  line(pppx, pppy, ppx, ppy);
  pppx = ppx;
  pppy = ppy;
  ppx = px;
  ppy = py;
  px = mouseX;
  py = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
