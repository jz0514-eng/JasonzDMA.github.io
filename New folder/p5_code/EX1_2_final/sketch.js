let cx,cy;
let px,py;
let bgc;
let gridSize;
let ghost;
let pizza;
let pac;
let jumpscare;
let showJumpscare = false;
let jumpscareTimer = 0;
let game
let pause = false;
function setup() {
    createCanvas(800, 800);
    frameRate(60);
    background(255);  
    bgc = color(20,1);
    // set up a assets folder then add an image.
    ghost = loadImage("assets/ghost.png")
    pacU = loadImage("assets/pacU.png")
    pacD = loadImage("assets/pacD.png")
    pacL = loadImage("assets/pacL.png")
    pacR = loadImage("assets/pacR.png")
    jumpscare = loadImage("assets/jumpscare.png")
    cx = width/4;
    cy = height/2;
    px = width*3/4;
    py = height/2;
    gridSize = 40;
    textSize(40);
    pac = pacR
    game = ("running");
}

function draw() {

    // optional fade trick
    //fill(bgc);
    //rect(9,9,width,height);
      
   if (pause === true) {
    textAlign(CENTER, CENTER);
    textSize(64);
    text("GAME PAUSED", width / 2, height / 2);



   }

        if (px === cx && py === cy) {
    game = "gameover";
        }

     if (game === "running") {
     background(200,0,150);  
     fill(0)
     rect(40, 40, 720)
     image(ghost, cx, cy, gridSize, gridSize);
     image(pac, px, py, gridSize, gridSize);
     }
if (game === "gameover") {
    background(0);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    textSize(64);
    text("GAME OVER", width / 2, height / 2);

        }

   if (showJumpscare) {
    fill(0, 200, 0);
    text("Booo!!", 350, 650, 200);
    image(jumpscare, 50, 300);
    jumpscareTimer--;
    if (jumpscareTimer <= 0) {
      showJumpscare = false; // stop showing after timer runs out
    }
}


    if( keyIsPressed) {  
       keyChoice();
    }
}


function keyChoice() {
  if (key === 'a' || key === 'A') {
    console.log("Player 1 left");  // left
    if (cx - gridSize >= 40) {
    cx += -gridSize;
    image(ghost, cx, cy, gridSize, gridSize);
    }
  } 
  else if (key === 'w' || key === 'W') {
    console.log("Player 1 up");  // up
    if (cy - gridSize >= 40) {
    cy += -gridSize; 
    image(ghost, cx, cy, gridSize, gridSize);
    }
  } 
  else if (key === 'd' || key === 'D') {
    console.log("Player 1 right");  // right
    if (cx + gridSize <= 720) {
    cx += gridSize;
    image(ghost, cx, cy, gridSize, gridSize);
    }
  } 
  else if (key === 's' || key === 'S') {
    console.log("Player 1 back");  // back
    if (cy + gridSize <= 720) {
    cy += gridSize;
    image(ghost, cx, cy, gridSize, gridSize);
    }
  } 
  else if (key === 'ArrowLeft') {
    console.log("Player 2 left");  // left
    if (px - gridSize >= 40) {
    px += -gridSize;
    image(pacL, px, py, gridSize, gridSize);
    pac = pacL
    }
  } 
  else if (key === 'ArrowUp') {
    console.log("Player 2 up");  // up
    if (py - gridSize >= 40) {
    py += -gridSize; 
    image(pacU, px, py, gridSize, gridSize);
    pac = pacU
    }
  } 
  else if (key === 'ArrowRight') {
    console.log("Player 2 right");  // right\
    if (px + gridSize <= 720) {
    px += gridSize;
    image(pacR, px, py, gridSize, gridSize);
    pac = pacR
    }
  } 
  else if (key === 'ArrowDown') {
    console.log("Player 2 down");  // down
    if (py + gridSize <= 720) {
    py += gridSize;
    image(pacD, px, py, gridSize, gridSize);
    pac = pacD
    }
  }
  else if (key === 'R' || key === 'r') {
    console.log("reset positions");
    cx = width/4;
    cy = height/2;
    px = width*3/4;
    py = height/2;
    pac = pacR;
    game = ("running")
  }

  else if (key === 'e' || key === 'E') {
    console.log("crash.log");  // text
    showJumpscare = true;
    jumpscareTimer = 360;
  }
  else if (key === "p" || key === "P")
    if (pause = false) {
      pause = true 
     console.log ("game paused")
    } else {pase = false
      console.log ("game unpaused")
  
    }


  else {
    console.log("None");
  }

key = "";  // you can empty it so, it does not double trigger

}
  
  
  

  

