// part 1 final versino of sine class example.


let recMode = false;
let can;
let s1,s2;

function setup() {
 can = createCanvas(1920,1080);
 background(255);
 fill(255);

 frameRate(240);
 noLoop();
 console.log(frameCount);
  //                 lx,ly,lnum,lrad,lf,lr,la
  
 s1 = new Spirograph(width/4,height/2,2,130,0.03, 0.5,80, 255,0,0);

 s2 = new Spirograph(width/2,height/2,3,350,0.5,0.2,80, 255,250,250);

 //s2 = new sdSine();
 
 
}

function draw() {
  //background(0,1);
 
 
 push();
 //translate(100,200);
//  rotate(radians(20));
     //scale(.5);

  s1.xcounter = width / 2 + sin(frameCount * 0.02) * 200;
  s1.ycounter = height / 2 + cos(frameCount * 0.03) * 200;
  s1.display();
  //s1.update();

  //console.log("Sine " + s1.getSine());
 // if (frameCount >500) {
//  s1.setSineFreq(.01);
 // s1.setSineAmp(300);
 // }
  
//fill(s1.getSine(),255-s1.getSine(),0);

  //ellipse(100,s1.getSine(), s1.getSine(), s1.getSine());


   s2.display();
   //s2.update();
  // s2.setSineBounce(1);
 // ellipse(500,0, s2.getSine(), s2.getSine());

  pop();


 // s1.setSineFreq(frameCount/2000);

// recordit();

}


/* function mousePressed() {

   s1.setSineFreq(.03);
   s2.setSineFreq(.005);


}.  */



// part 2 of final version of sine class example




  


class Spirograph {


xcounter
ycounter

NUMSINES;
sines;
rad;
fund;
ratio;
alpha;
redx
greenx
bluex

constructor(lx,ly,lnum,lrad,lf,lra,la,lr,lg,lb) {

this.xcounter = lx
this.ycounter = ly

this.NUMSINES = lnum; // how many of these things can we do at once?
this.sines = new Array(this.NUMSINES).fill(0); // an array to hold all the current angles
this.rad = lrad; // an initial radius value for the central sine

// play with these to get a sense of what's going on:
this.fund = lf; // the speed of the central sine
this.ratio = lra; // what multiplier for speed is each additional sine?
this.alpha = la; // how opaque is the tracing system
this.redx = lr
this.greenx = lg
this.bluex = lb

}



setup() {




  for (let i = 0; i<this.sines.length; i++) {
    this.sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

  display() {
  

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(this.xcounter, this.ycounter); // move to middle of screen

  for (let i = 0; i < this.sines.length; i++) {
    // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    
      stroke(this.redx * (float(i) / this.sines.length), this.greenx * (float(i) / this.sines.length), this.bluex * (float(i) / this.sines.length), this.alpha); // blue
      fill(this.redx, this.greenx, this.bluex, this.alpha / 2); // also, um, blue
      const erad = 5.0 * (1.0 - float(i) / this.sines.length); // pen width will be related to which sine
    
    const radius = this.rad / (i + 1); // radius for circle itself
    rotate(this.sines[i]); // rotate circle
  
    push(); // go up one level
    translate(0, radius); // move to sine edge
    
     ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    this.sines[i] = (this.sines[i] + (this.fund + (this.fund * i * this.ratio))) % TWO_PI; // update angle based on fundamental
  }

  pop(); // pop down final transformation



  }
}



/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}
