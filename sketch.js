const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var polygon;
var slingshot;
var bg;
var backgroundIma;
var score=0;

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(500,400,250,10);

    box1=new Box(500,370,40,50,PI/2);
    box2=new Box(500-40,370,40,50,PI/2);
    box3=new Box(500-80,370,40,50,PI/2);
    box4=new Box(500+40,370,40,50,PI/2);
    box5=new Box(500+80,370,40,50,PI/2);

    box6=new Box(500,370-50,40,50,PI/2);
    box7=new Box(500-40,370-50,40,50,PI/2);
    box8=new Box(500+40,370-50,40,50,PI/2);

    box9=new Box(500,370-100,40,50,PI/2);

    ground2=new Ground(1100,300,350,10);

    box10=new Box(1100,270,40,50,PI/2);
    box11=new Box(1100-40,270,40,50,PI/2);
    box12=new Box(1100-80,270,40,50,PI/2);
    box13=new Box(1100-120,270,40,50,PI/2);
    box14=new Box(1100+40,270,40,50,PI/2);
    box15=new Box(1100+80,270,40,50,PI/2);
    box16=new Box(1100+120,270,40,50,PI/2);

    box17=new Box(1100,270-50,40,50,PI/2);
    box18=new Box(1100-40,270-50,40,50,PI/2);
    box19=new Box(1100-80,270-50,40,50,PI/2);
    box20=new Box(1100+40,270-50,40,50,PI/2);
    box21=new Box(1100+80,270-50,40,50,PI/2);

    box22=new Box(1100-40,270-100,40,50,PI/2);
    box23=new Box(1100,270-100,40,50,PI/2);
    box24=new Box(1100+40,270-100,40,50,PI/2);

    box25=new Box(1100,270-150,40,50,PI/2);

    polygon=new Polygon(200,300,40,40);
    slingshot=new Slingshot(polygon.body,{x:200,y:100});
}

function draw(){
    getBackgroundImg();
    if(bg)
        background(bg);
    Engine.update(engine);
    push();
    noStroke();
    textSize(35)
    fill("white");
    text("Score : " + score, width-300, 50);
    pop();

    ground1.display();
    ground2.display();

    push();
    fill(135, 206, 234);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    pop();

    push();
    fill(255, 192, 203);
    box6.display();
    box7.display();
    box8.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    pop();

    push();
    fill(63, 224, 208);
    box9.display();

    box22.display();
    box23.display();
    box24.display();
    pop();

    push();
    fill(128, 128, 128);
    box25.display();
    pop();

    polygon.display();
    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //console.log(hour);
    
    if(hour>=06 && hour<=19){
        
        bg = "orange";
    }
    else{
        
        bg = color(56, 44, 44);
    }
    //backgroundImg=loadImage(bg);
    
}
