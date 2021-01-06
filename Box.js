class Box extends Baseclass {
  constructor(x, y,width, height,angle){
    var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    super(x,y,width, height, options);
    this.visiblity=225;
  }
  display()
  {
    
    if(this.body.speed<3)
    {
      super.display();
    }
    else
    {
      push();
      World.remove(world,this.body);
      this.visiblity=this.visiblity-10;
      tint(255,this.visiblity);
      pop();
    }
  }

  score()
  {
    if (this.visiblity < 0 && this.visiblity > -1005)
    {
      score++;
    }
  }

};