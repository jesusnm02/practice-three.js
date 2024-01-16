import { Clock } from "three";

const clock = new Clock()//indica la cantidad de tiempo que se demoro en realizar la animacion anterior

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
        this.tick();
      // renderizar un fragmento
        this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {

    const delta = clock.getDelta();

    for (const object of this.updatables) {
        object.tick(delta);
    }
}
}

export { Loop };