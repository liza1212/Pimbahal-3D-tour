import { Behaviour, serializable, } from '@needle-tools/engine';
import { Object3D } from 'three';

export class Trigg extends Behaviour {
    update() {

        if (this.context.input.getMouseWheelChanged(0)) {
            console.log("Mouse changed")
            for (const child of this.gameObject.children) {
                if (child.name == "Cube" && child.type == "Mesh") {
                    console.log("child properties: ", child)
                    child.rotateY(this.context.time.deltaTime)
                }
            }
        }
        
    }
}