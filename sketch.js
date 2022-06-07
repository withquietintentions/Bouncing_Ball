//input the speed of the bouncing ball
let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;
let warningTextfill= 0;
let warningText="";
function setup() {
  createCanvas(640, 360);
  let inp = createInput();
  inp.position(100, 10);
  inp.size(100);
  inp.input(myInputEvent);
}

function draw() {
  createCanvas(600,600);
  background(0);
  fill(255);
  textFont(24);
  text("input speed", 15,25);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
  fill(warningTextfill);
text(warningText, width/2, 25)
}
function myInputEvent() {
  console.log('you are typing: ', this.value());
  if(this.value()==""||this.value()=="."){
    xspeed=5;
  }
  else if (this.value()>300){
    xspeed=5;
    warningTextfill =255;
    warningText = "please enter a value less than 300"

  }
   else if (this.value()<1){
    xspeed=5;
    warningTextfill =255
    warningText = "please enter the value 0.x"
  }
  else{
  warningTextfill =0;
  xspeed=int(this.value());
  }
}