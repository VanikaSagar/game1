const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygoning

var score=0

function preload(){
    polygonimg=loadImage("polygon.png")
}


function setup(){
     var canvas=createCanvas(1500,700)
     engine=Engine.create()
     world=engine.world
     

     ground=new Ground(1100,690,2500,14)
     box=new Box(1000,500,50,20)
     box1=new Box(850,200,50,20)
     box2=new Box(1200,600,50,20)
     box3=new Box(750,500,50,20)
     box4=new Box(700,100,50,20)
     box5=new Box(900,100,50,20)


     
     polygon=Bodies.circle(50,200,20)
   
     World.add(world,polygon)

     slingshot = new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
    background("purple")

   
    textSize(35)
    fill("white")
    text("Score : "+score,300,200)
    Engine.update(engine)

    
    slingshot.display()
    box.display()
    box.score()
    ground.display()
    box1.display()
    box1.score()
    box2.display()
    box2.score()
    box3.display()
    box3.score()
    box4.display()
    box4.score()
    box5.display()
    box5.score()
    
    
    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)



}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon)
        Box.body.Visibility=255
    }
}
