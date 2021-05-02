var options = {
  inc: 0.01,
  scl: 10,
  showVectors: false,
  mag: 0.9
};

var cols, rows;
var fr;

var zoff = 0;

var particles = [];

var flowfield;

function changeValue(prop, value) {
  options[prop] = value;
}

function setup() {
  createCanvas(400, 400);
  // pixelDensity(1);
  cols = floor(width / options.scl);
  rows = floor(width / options.scl);
  fr = createP("");

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 1000; i++) {
    particles[i] = new Particle();
  }

  if (!options.showVectors) {
    background(255);
  }


  // osc = new p5.TriOsc();
  // osc = new p5.SinOsc();
  // osc.amp(0.5);
  // fft = new p5.FFT();
  // osc.start();
}

function draw() {
  let { scl, inc, showVectors, mag } = options;
  if (showVectors) {
    background(255);
  }

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(mag);
      flowfield[index] = v;
      xoff += inc;

      if (showVectors) {
        stroke(0, 50);
        strokeWeight(1);
        push();
        translate(x * scl, y * scl);
        rotate(v.heading());
        line(0, 0, scl, 0);
        pop();
      }

      // fill(r)
      // rect(x * options.scl, y * options.scl, options.scl, options.scl)
      zoff += 0.000001;
    }
    yoff += inc;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));

  // noLoop();

  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, width);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24)
}
