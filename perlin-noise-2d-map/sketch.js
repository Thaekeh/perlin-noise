var options = {
  inc: 0.01,
  scl: 10,
};

var cols, rows;
var fr;

function changeValue(prop, value) {
  options[prop] = value;
}

function setup() {
  createCanvas(200, 200);
  // pixelDensity(1);
  cols = floor(width / options.scl)
  rows = floor(width / options.scl)
  fr = createP('');

  // osc = new p5.TriOsc();
  // osc = new p5.SinOsc();
  // osc.amp(0.5);
  // fft = new p5.FFT();
  // osc.start();
}

function draw() {
  background(51);

  var yoff = 0;

  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      xoff += options.inc;
      fill(r)
      rect(x * options.scl, y * options.scl, options.scl, options.scl)
    }
    yoff += options.inc;
  }

  fr.html(floor(frameRate()))

  // noLoop();

  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, width);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24)
}
