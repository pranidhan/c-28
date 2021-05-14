class SlingShot {


constructor(bodyA,pointB){

    var chain_options = {
        length :10,
        stiffness: 0.04,
        bodyA : bodyA,
        pointB: pointB,
    }
this.pointB=pointB
 this.sling = Matter.Constraint.create(chain_options) ;
 World.add(world,this.sling)


}

display(){
    if(this.sling.bodyA){

    
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;

strokeWeight(5);
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

fly(){
    this.sling.bodyA=null;
}

}


