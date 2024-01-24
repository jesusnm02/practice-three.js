import { BoxGeometry, CylinderGeometry, SphereGeometry } from 'three';

function createGeometries() {
    const cabin = new BoxGeometry(2, 2.25, 1.5);

    const nose = new CylinderGeometry(0.75, 0.75, 3, 12);

    const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 16);

    const chimney = new CylinderGeometry(0.3, 0.1, 0.5);

    const feat = new BoxGeometry(.5, .2, .2);

    const feat_learg = new BoxGeometry(.2, 1, .2);

    const body = new BoxGeometry(.9, 1.5, .2);

    const humo = new SphereGeometry(.1, 40, 40);

    //devolvemos todos los objetoss
    return {
        cabin,
        nose,
        wheel,
        chimney,
        feat,
        feat_learg, 
        body, 
        humo,
      };
}

export { createGeometries }