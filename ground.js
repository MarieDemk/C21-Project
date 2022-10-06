class Ground {
    constructor (x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.body = Bodies.rectangle(x,y,w,h, {isStatic:true});
        World.add(world,this.body);
    }
    display() {
        push();
        fill(this.c);
        stroke("black");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}