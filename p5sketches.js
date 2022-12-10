//--scia del mouse----------------------------------------------------------------------------------------------------------------------------------

let smpx = 0;
let smpy = 0;

let X;
let Y;

let smppx = 0;
let smppy = 0;

let smpppx = 0;
let smpppy = 0;

let smppppx = 0;
let smppppy = 0;

let smpppppx = 0;
let smpppppy = 0;

let cnv;
let easing = 900000000000000000000000000000;

let sciamouse = function (sm) {
  sm.setup = function () {
    cnv = sm.createCanvas(sm.windowWidth, 3 * sm.windowHeight);
    cnv.class("sciamouse");
  };

  sm.draw = function () {
    sm.background(18, 18, 18, 200);
    sm.stroke(255);
    sm.strokeWeight(10);
    var tX = sm.mouseX;
    var tY = sm.mouseY;
    X += (tX - X) * easing;
    Y += (tY - Y) * easing;

    sm.line(X, Y, smpx, smpy);
    sm.line(smppx, smppy, smpx, smpy);
    sm.line(smpppx, smpppy, smppx, smppy);
    sm.line(smppppx, smppppy, smpppx, smpppy);
    sm.line(smpppppx, smpppppy, smppppx, smppppy);

    smpppppx = smppppx;
    smpppppy = smppppy;
    smppppx = smpppx;
    smppppy = smpppy;
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
