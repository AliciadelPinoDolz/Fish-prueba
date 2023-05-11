let port;
let connectBtn;
let values;

const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;
const { GravityBehavior } = toxi.physics2d.behaviors;
const { Vec2D, Rect } = toxi.geom;

let physics;
// let particles = [];
// let particles1 = [];
// let particles2 = [];
let springs = [];

function preload() {
  bg = loadImage("back1.jpg");
  texture = loadImage("fishtexture1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  //create a Serial connection
  port = createSerial();
//create a Button element to press for connecting Arduino
  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(20, 20); //position of button
  connectBtn.mousePressed(connectBtnClick); //if button is clicked run connectBtnClick function below


  physics = new VerletPhysics2D();
  let bounds = new Rect(0, 0, width, height);
  physics.setWorldBounds(bounds); //edges of the physics world

  newFish();
}

function draw() {
  background(bg);
  physics.update();

  fill(100);
  noStroke();
  beginShape();
  for (let particle of particles){
    vertex(particle.x,particle.y);
  }
  endShape(CLOSE);  

  fill(255,100,255);
  noStroke();
  beginShape();
  for (let particle2 of particles2){
    vertex(particle2.x,particle2.y);
  }
  endShape(CLOSE);

  fill(255,100,255);
  noStroke();
  beginShape();
  for (let particle1 of particles1){
    vertex(particle1.x,particle1.y);
  }
  endShape(CLOSE);
  
  fill(100);
  noStroke();
  beginShape();
  for (let particle3 of particles3){
    vertex(particle3.x,particle3.y);
  }
  endShape(CLOSE);  

  let str = port.readUntil("\n"); //reads in complete lines
    // values = int(split(str,","));
  values = split(str,","); // Split string using ' ' as a delimiter/marker and parse to int
  //let data = data.trim(values);
   for (let i = 0; i < values.length; i++) {
    //  if (i < numInputs) {
    //    //display
       text(values[i], 10 + i * 50, height - 20);
       console.log(values[i]);
       }
      
    
    // threshold = 50;
     if (values[0]>10 && values[0]<30) {
    //   //console.log(val.length);
       particles[0].lock(); //lock a particle into place
      particles[0].x = -50;
     particles[0].y = -50;
    particles[0].unlock();
     }
     if (values[1]>10 && values[1]<30) {
      //   //console.log(val.length);
         particles1[0].lock(); //lock a particle into place
        particles1[0].x = -50;
       particles1[0].y = -50;
      particles1[0].unlock();
       }
     if (values[2]>10 && values[2]<30) {
      //   //console.log(val.length);
         particles2[0].lock(); //lock a particle into place
        particles2[0].x = -50;
       particles2[0].y = -50;
      particles2[0].unlock();
     }
     if (values[2]>10 && values[2]<30) {
      //   //console.log(val.length);
         particles3[0].lock(); //lock a particle into place
        particles3[0].x = -50;
       particles3[0].y = -50;
      particles3[0].unlock();
     }
    //  frameRate(30);

    //  particles2[0].lock(); //lock a particle into place
    //   particles2[0].x = -40;
    //  particles2[0].y = -40;
    //  particles2[0].unlock();
    //  }

     
  }



//this function runs when 'connect' button is clicked
function connectBtnClick() {
  if (!port.opened()) {//if port is not already open/connected
    port.open('Arduino', 9600); //open a connection at baud rate 9600
  } else { //otherwise close port connection 
    port.close();
  }
}

