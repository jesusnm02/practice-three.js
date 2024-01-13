import { BoxGeometry, Mesh, MeshBasicMaterial, CapsuleGeometry, CircleGeometry } from 'three';

function createCube() {
  // creamos la geometria
  const geometry = new BoxGeometry(2, 2, 2);

  // definimos el material
  const material = new MeshBasicMaterial();

  // creamos la malla
  const cube = new Mesh(geometry, material);

  return cube;
}

function createCapsula(radius, lenght, seg, radseg) {
  //creamos la capsula
  const geometry = new CapsuleGeometry(radius, lenght, seg, radseg);

  const material = new MeshBasicMaterial();

  const capsule = new Mesh( geometry, material ); 
  
  return capsule;
}

function createCircle(radius, segments, start, radseg) {
  const geometry = new CircleGeometry(radius, segments, start, radseg);

  const material = new MeshBasicMaterial();

  const circle = new Mesh(geometry, material);

  return circle;
}

export { createCube, createCapsula, createCircle };
