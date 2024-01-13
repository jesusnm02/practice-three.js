import { createCamera } from '../components/camera.js';
import { createCube } from '../components/figures.js';
import { createScene } from '../components/scene.js';
import { createCapsula } from '../components/figures.js';
import { createCircle } from '../components/figures.js';

import { createRenderer } from '../systems/renderes.js';
import { Resizer } from '../systems/resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera(0, 0, 10);
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();

    scene.add(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

class geometryCapsule {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const capsule = createCapsula(10, 10);

    scene.add(capsule);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

class geometryCircle {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const circle = createCircle(10, 10);

    scene.add(circle);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World, geometryCapsule };