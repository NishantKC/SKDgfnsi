class sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 300
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
        this.pointB = pointB
    }
    display(){
        strokeWeight(5)
        stroke("black")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}