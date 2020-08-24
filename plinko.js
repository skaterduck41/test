class Plinko{
    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("sprites/smoke.png")
     //   this.plinko1 = []
		this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
        
	}

	display()
	{
		var plinkoPos=this.body.position;	
		push()
		translate(plinkoPos.x, plinkoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
        pop()
        //plinko1.length = 36
       // for(var i=0;i<this.plinko1.length;i++) {
       //     image(this.image, this.plinko1[i][0], this.plinko1[i][1])
         // }
 }
}