class Snow {
     constructor(x,y) {
         var options = {
              'friction': 0.5,
              'density' : 0.8,
              'isStatic':false
         }
        this.x = x
        this.y = y
        //this.r = r
        this.body = Bodies.circle(this.x,this.y,5,options);
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);
        

        

     }

     updateY(){
          if(this.body.position.y > height){ 
               Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,800)}) } } 
               showDrop(){ 
               fill("blue") 
               imageMode(CENTER); 
               image(this.image,this.body.position.x,this.body.position.y,10,10); }

     display () {

  

          var snowpos =this.body.position;
          push () 
          translate(snowpos.x, snowpos.y);
          imageMode(CENTER);
          ellipseMode(RADIUS)
          image(this.image, 0, 0, this.r*2, this.r*2);
          pop();
   
     
     }
}
