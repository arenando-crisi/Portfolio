let px = 0;
let py = 0;

let ppx = 0;
let ppy = 0;

let pppx = 0;
let pppy = 0;

let cnv;

let sciamouse = function (sm) {
  sm.setup = function () {
    cnv = sm.createCanvas(sm.windowWidth, sm.windowHeight);
    cnv.class("sciamouse");
  };

  sm.draw = function () {
    sm.clear();
    sm.stroke(255);
    sm.strokeWeight(5);
    sm.line(sm.mouseX, sm.mouseY, px, py);
    sm.line(ppx, ppy, px, py);
    sm.line(pppx, pppy, ppx, ppy);
    pppx = ppx;
    pppy = ppy;
    ppx = px;
    ppy = py;
    px = sm.mouseX;
    py = sm.mouseY;
  };

  sm.windowResized = function () {
    sm.resizeCanvas(sm.windowWidth, sm.windowHeight);
  };
};

let sm = new p5(sciamouse);
