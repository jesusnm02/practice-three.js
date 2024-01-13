import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // punto
    1, // aspect ratio (dummy value)
    0.1, // quiebre de cerca
    100, // quiebre de lejos
  );

  // x, y, z 0, 0, 0 la camra se posiciona en el centro
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
