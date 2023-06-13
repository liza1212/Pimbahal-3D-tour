import { Behaviour, serializable } from "@needle-tools/engine";

export class Rotate extends Behaviour
{
    @serializable()
    speed : number = 1;

    start(){
        // logging this is useful for debugging in the browser. 
        // You can open the developer console (F12) to see what data your component contains
        console.log("Reached here: ",this);
    }

    // update will be called every frame
    // update(){
    //     this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
    // }
}