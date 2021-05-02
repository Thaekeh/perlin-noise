

var options = {
  inc: 0.01,
  start: 0
}
function changeValue(prop, value) {
  options[prop] = value
}

function setup() {
  createCanvas(400 , 400)

  // osc = new p5.TriOsc();
  // osc = new p5.SinOsc();
  // osc.amp(0.5);
  // fft = new p5.FFT();
  // osc.start();
}


function draw() {
  background(100);

  stroke(255);
  noFill();
  beginShape();

  var xoff = options.start;
  for (var x = 0; x < innerWidth; x++) {
    stroke(255);
    // vertex(x, random(height));
    
    var y = noise(xoff) * height;
    vertex(x, y);

    // osc.freq(map(y, 0, height, 40, 400))

    xoff += options.inc;
  }

  endShape();

  options.start += options.inc;

// noLoop();


  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, width);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24)
}
