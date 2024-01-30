import { PerspectiveCamera } from 'three';

function createCamera(x, y, z) {
  const camera = new PerspectiveCamera(
    35, // punto
    1, // aspect ratio (dummy value)
    0.1, // quiebre de cerca
    160, // quiebre de lejos
  );

  // x, y, z 0, 0, 0 la camra se posiciona en el centro
  camera.position.set(x, y, z);

  return camera;
}

export { createCamera };
