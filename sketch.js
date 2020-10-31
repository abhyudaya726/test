const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var roof;

var chain,chain2,chain3,chain4,chain5;

var bob1,bob2,bob3,bob4,bob5;

function setup(){
    canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    roof = new Roof(400,100,500,10);

    bob1 = new Bob(400,300,30);
    bob2 = new Bob(460,300,30);
    bob3 = new Bob(340,300,30);
    bob4 = new Bob(520,300,30);
    bob5 = new Bob(280,300,30);

    chain = new Chain(bob1.bodies,{x:400,y:100});
    chain2 = new Chain(bob2.bodies,{x:460,y:100});
    chain3 = new Chain(bob3.bodies,{x:340,y:100});
    chain4 = new Chain(bob4.bodies,{x:520,y:100});
    chain5 = new Chain(bob5.bodies,{x:280,y:100});
    
}

function draw(){
    background(51);
    Engine.update(engine);
    
    roof.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    chain.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
}