import { createCamera } from '../components/camera.js';
import { createCube } from '../components/figures.js';
import { createScene } from '../components/scene.js';
import { createCapsula } from '../components/figures.js';
import { createCircle } from '../components/figures.js';
import { createCone } from '../components/figures.js';

import { createRenderer } from '../systems/renderes.js';
import { Resizer } from '../systems/resizer.js';
import { createRenderer_ilumination } from '../systems/renderer_ilumination.js';
import { Lights } from '../components/lights.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;


const luces = new Lights();
class World {
  constructor(container) {
    camera = createCamera(0, 0, 10);
    scene = createScene();
    renderer = createRenderer_ilumination();
    container.append(renderer.domElement);

    const cube = createCube();

    const light = luces.Directionalight();

    scene.add(cube, light);

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
    renderer = createRenderer_ilumination();
    container.append(renderer.domElement);

    const capsule = createCapsula(10, 10);

    const light = luces.PointLight();

    scene.add(capsule, light);

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

    const circle = createCircle(20, 3, 0, 6.2);

    scene.add(circle);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

class geometryCone {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer_ilumination();
    container.append(renderer.domElement);

    const circle = createCone(20, 20, 4);

    const light = luces.Directionalight();

    scene.add(circle, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}
export { World, geometryCapsule, geometryCircle, geometryCone };