let cover;
let picker = 0;
let font;
let interface;

function preload() {
  cover = loadImage("data/rose calloway cobalt aesthetic.jpeg");
  font = loadFont("data/font1.otf");
  interface = loadImage("data/Interface.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(cover, 0, 0);
  showImage();
}

function showImage() {
  //outfit picker starter page
  if (picker == 0) {
    image(cover, 0, 0);
    textFont(font, 45);
    fill("#D7A1A2");
    text("Outfit Picker", 200, 125);
    stroke(0);
    //buttons
    rect(250, 465, 170, 75, 100);
    noFill();
    textFont(font, 30);
    text("Start", 298, 510);
  } else if (picker == 1) {
    image(interface, 0, 0);
    showRestart();
    //if (mouseY > 125 && mouseY < 650) {
    }
 // } else if (picker == 2) {
  
}

function mousePressed() {

  if (250 < mouseX < 420 && 465 < mouseY < 540) {
   
    picker = 1;
  }
  
}
function showRestart() {
  stroke(0);
  fill("#D7A1A2");
  rect(50, 475, 100, 75, 20);
  fill(0);
  textFont(font, 20);
  text("Restart", 65, 520);
}
