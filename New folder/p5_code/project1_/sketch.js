

let currentkey = '1';

let bgc ;

let gkcount;

let rkcount

let space = 10;

let leaf;





function setup() {
    createCanvas(1600, 900);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    rkcount = 50;
    leaf = loadImage("assets/leaf.png");
}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}


}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);

  drawline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawFatLine(color(255,100,100), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawFatLine(color(100,255,100), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // fat purple line
  drawFatLine(color(100,100,255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  
    RanjasonBrush(rkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (rkcount > 100 ) {

        rkcount = 30;
    } else {
        rkcount+=3;
    }
 break;
case '6':
    console.log("6");  
    jasonRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 30;
    } else {
        gkcount+=3;
    }
break;

case '7':
  leafBrush(leaf, mouseX, mouseY);
  break;

case '8':
  console.log("8");  
  treeBrush(mouseX, mouseY);
  break;

case 'e':
  case 'E':
  console.log("E");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;

  


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline( k,  lx, ly,  px, py) {
  strokeWeight(3);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(30);
  stroke(k);
  line(lx, ly, px, py);
}

function jasonRanBrush(kcount, lx, ly,  px, py) {

  strokeWeight(random(20,35));
  stroke(80,kcount,40);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}
function RanjasonBrush(rcount, lx, ly,  px, py) {

  strokeWeight(random(30,100));
  let randr = (random(1,150));
  let randg = (random(1,150));
  let randb = (random(1,150));
  stroke(rcount+randr,rcount +randg,rcount+randb);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}


function leafBrush(img, lx, ly) {
  if (frameCount % 7 === 0) { 
  imageMode(CENTER);
  image(img, lx, ly, 640,640)
}
}
  
function treeBrush(lx, ly) {
  if (frameCount % 5 === 0){
  let randa = (random(1,50));
  let randb = (random(1,50));
  let randc = (random(1,50));
  stroke(100+randa, 50+randb, 20+randc); // brown branch
  strokeWeight(random(13,27));
  let branchLength = random(50, 180);
  let angle = random(-PI, PI);
  let endX = lx + cos(angle) * branchLength;
  let endY = ly + sin(angle) * branchLength;
  line(lx, ly, endX, endY);
  }
}




function eraser( k, lx, ly, sz) {
  stroke(k);
  ellipse(lx, ly, sz,sz);
}


function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } if (key == 'R' || key == 'r') {
     background(250,180,180);
  }if (key == 'G' || key == 'g') {
     background(180,250,180);
  }if (key == 'B' || key == 'b') {
     background(180,180,250);
  }else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
  
  }


}



//
// >20
// >>30
// 35
// 30
// 20
// 10
// 30
// 80
// 100
// 120
// 80
