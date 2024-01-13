import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

function createCube() {
  // creamos la geometria
  const geometry = new BoxGeometry(2, 2, 2);

  // definimos el material
  const material = new MeshBasicMaterial();

  // creamos la malla
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
