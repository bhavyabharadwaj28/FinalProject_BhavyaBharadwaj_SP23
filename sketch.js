let cover;
let picker = 0;
let font;
let interface;
let option1top;
let option1bottom;
let option2top;
let option2bottom;
let option3top;
let option3bottom;
let option4top;
let option4bottom;
let option5top;
let option5bottom;
let option6top;
let option6bottom;
let option7top;
let option7bottom;
let option8top;
let option8bottom;
let selectedItems = [];
let selectedItems2 = [];
let outfit = [];
let slider;


function preload() {
  cover = loadImage("data/rose calloway cobalt aesthetic.jpeg");
  font = loadFont("data/font1.otf");
  interface = loadImage("data/Interface.png");
  option1top = loadImage("data/option1top.png");
  option1bottom = loadImage("data/option1bottom.png");
  option2top = loadImage("data/option2top.png");
  option2bottom = loadImage("data/option2bottom.png");
  option3top = loadImage("data/option3top.png");
  option3bottom = loadImage("data/option3bottom.png");
  option4top = loadImage("data/option4top.png");
  option4bottom = loadImage("data/option4bottom.png");
  option5top = loadImage("data/option5top.png");
  option5bottom = loadImage("data/option5bottom.png");
  option6top = loadImage("data/option6top.png");
  option6bottom = loadImage("data/option6bottom.png");
  option7top = loadImage("data/option6top.png");
  option7bottom = loadImage("data/option7bottom.png");
  option8top = loadImage("data/option8top.png");
  option8bottom = loadImage("data/option8bottom.png");
 
}
function setup() {
  createCanvas(1000, 1000);
  // slider = createSlider(0, Math.min(selectedItems.length, selectedItems2.length) - 1, 0);
  slider = createSlider(50, 900);
  slider.position(0, 900);
  slider.style("width", "1000px");
  slider.input(outfitCheck);
}

function draw() {
  background(220);
  image(cover, 0, 0);
  showImage();
  let pos = slider.value();
  for (let i = 0; i < selectedItems.length; i++) {
    let x = 200 + i * 200;
    image(selectedItems[i], x - pos, 250, 150, 200);
  }
  for (let i = 0; i < selectedItems2.length; i++) {
    let x = 200 + i * 200;
    image(selectedItems2[i], x - pos, 570, 150, 200);
  }
  
}
function outfitCheck() {
  let i = slider.value();
  outfit = [selectedItems[i], selectedItems2[i]];
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
    showDressMe();
    let topButton = createButton("Select Top");
    topButton.position(100, 250);
    topButton.mousePressed(() => {
      selectedItems.push(
        option1top,
        option2top,
        option3top,
        option4top,
        option5top,
        option6top,
        option7top,
        option8top
      );
    });

    let bottomButton = createButton("Select Bottom");
    bottomButton.position(100, 550);
    bottomButton.mousePressed(() => {
      selectedItems2.push(
        option1bottom,
        option2bottom,
        option3bottom,
        option4bottom,
        option5bottom,
        option6bottom,
        option7bottom,
        option8bottom
      );
    });
    let saveButton = createButton("Save Outfit");
    saveButton.position(700, 800);
    saveButton.mousePressed(() => {
      saveCanvas("outfit", "png");
    });
  }
}

function showPerfect(){
 image(perfect,100,100); 
}


function mousePressed() {
  if (250 < mouseX && mouseX < 420 && 465 < mouseY && mouseY < 540) {
    picker = 1;
  }
}
function showRestart() {
  stroke(0);
  fill("#D7A1A2");
  rect(50, 795, 100, 75, 20);
  fill(0);
  textFont(font, 20);
  text("Restart", 65, 835);
}

function showDressMe() {
  stroke(0);
  fill("#D7A1A2");
  rect(850, 795, 100, 74, 20);
  fill(0);
  textFont(font, 20);
  text("Dress Me", 855, 835);
}

//function keyPressed() {}
