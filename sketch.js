let values = [];
let i = 0;
let j = 0;
function setup() {
  createCanvas(windowWidth - 30, windowHeight - 30);
  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
  }
}
function draw() {
  background(28, 187, 180);
  bubbleSort();
  simulateSorting();
}
function bubbleSort() {
  for (let k = 0; k < 8; k++) {
    if (i < values.length) {
      let temp = values[j];
      if (values[j] > values[j + 1]) {
        values[j] = values[j + 1];
        values[j + 1] = temp;
      }
      j++;
      if (j >= values.length - i - 1) {
        j = 0;
        i++;
      }
    } else {
      noLoop();
    }
  }
}
function simulateSorting() {
  for (let i = 0; i < values.length; i++) {
    stroke(100, 143, 143);
    fill(255, 255, 255);
    rect(i * 8, height, 8, -values[i], 20);
  }
}
