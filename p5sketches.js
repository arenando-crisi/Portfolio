//--scia del mouse----------------------------------------------------------------------------------------------------------------------------------

let smpx = 0;
let smpy = 0;

let smppx = 0;
let smppy = 0;

let smpppx = 0;
let smpppy = 0;

let cnv;

let sciamouse = function (sm) {
  sm.setup = function () {
    cnv = sm.createCanvas(sm.windowWidth, 2 * sm.windowHeight);
    cnv.class("sciamouse");
  };

  sm.draw = function () {
    sm.clear();
    sm.stroke(255);
    sm.strokeWeight(5);
    sm.line(sm.mouseX, sm.mouseY, smpx, smpy);
    sm.line(smppx, smppy, smpx, smpy);
    sm.line(smpppx, smpppy, smppx, smppy);
    smpppx = smppx;
    smpppy = smppy;
    smppx = smpx;
    smppy = smpy;
    smpx = sm.mouseX;
    smpy = sm.mouseY;
  };

  sm.windowResized = function () {
    sm.resizeCanvas(sm.windowWidth, 2 * sm.windowHeight);
  };
};

let sm = new p5(sciamouse);
