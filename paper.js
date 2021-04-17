class paper{
    constructor (x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.image = loadImage("sprites/paper.png")
        World.add(world,this.image);
    }
    display(){
        push()
        fill(128);
        strokeWeight(4);
        pop()
    }
}
function keypressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145})
    }
}