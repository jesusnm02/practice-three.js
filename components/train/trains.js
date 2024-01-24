import { Group, MathUtils  } from "three";

import { createMeshes } from "./meshes.js";

const wheelSpeed = MathUtils.degToRad(24);
class Train extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();

    this.add(
        this.meshes.nose,
        this.meshes.cabin,
        this.meshes.chimney,
        this.meshes.smallWheelRear,
        this.meshes.smallWheelCenter,
        this.meshes.smallWheelFront,
        this.meshes.bigWheel, 
        this.meshes.chimney,
        this.meshes.feat_lego, 
        this.meshes.copie_feat,
        this.meshes.leg,
        this.meshes.copie_leg,
        this.meshes.body,
        this.meshes.humo1, 
      );
  }
  tick(delta) {
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta * 40;
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta * 40;
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta * 40;
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta * 40;
    for(let x=0; x < 1; x += 0.2) {
      this.meshes.humo1.position.y = (( Math.sin( 2 * Math.PI * x ) * delta * 1000 ) + 3 )
    }
  }
}

export { Train };