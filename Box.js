class Box{
    constructor(x,y,width,height){
        var options ={
            'restitution':3,
            'friction':3
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.x=x
        this.y=y
       this.Visibility=255
      
        World.add(world,this.body)

    }
    display(){
        
     
       

      if(this.body.speed<28){
            var pos=this.body.position
            push ()
            translate (pos.x,pos.y)
            rectMode(CENTER)
            fill ("yellow")
            rect(0,0,this.width,this.height)
            pop ()
       }

       else{
          
         World.remove(world,this.body)
        push ()
           this.Visibility=this.Visibility-5
           tint(255,this.Visiblity);
          
          // rect(this.body.position.x,this.body.position.y,50,50)
          pop()


       }


        
       
    }

    score(){
        if(this.Visibility < 0 && this.Visibility > -1550){
            score++
        }
    }
}