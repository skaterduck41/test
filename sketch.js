const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8 ,plinko9 ,plinko10 ,plinko11 ,plinko12 ,plinko13 ,plinko14 ,plinko15 ,plinko16 ,plinko17 ,plinko18 ,plinko19 ,plinko20  
var world

function setup() {
  createCanvas(800,480);
engine = Engine.create();
world = engine.world;
ground1 = new Ground(200, 450, 1200, 20)

for(var i=0;i<36;i++) {
  //image(this.image, this.plinko1[i][0], this.plinko1[i][1])
  [plinko] = new Plinko(50, 50, 10)
}

///plinko2 = new Plinko(50, 100, 10)
}

function draw() {
  background(0);
  Engine.update(engine);  
  ground1.display();
  plinko1.display();
  

}