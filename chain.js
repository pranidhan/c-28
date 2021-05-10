class Chain {


constructor(bodyA,bodyB){

    var chain_options = {
        length :10,
        stiffness: 0.04,
        bodyA : bodyA,
        bodyB : bodyB,
    }

 this.chain = Matter.Constraint.create(chain_options) ;
 World.add(world,this.chain)


}

display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

strokeWeight(5);
line(pointA.x,pointA.y,pointB.x,pointB.y);

}



}