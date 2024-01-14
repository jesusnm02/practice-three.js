import { BoxGeometry, Mesh, MeshBasicMaterial, CapsuleGeometry, CircleGeometry, MeshStandardMaterial
, ConeGeometry  } from 'three';

const spec = {
  color: 'purple',
  color : '#F5640C',
  }
  
const material = new MeshStandardMaterial(spec);

function createCube() {
  // creamos la geometria
  const geometry = new BoxGeometry(2, 2, 2);

  // definimos el material
  const material = new MeshStandardMaterial( { color: "purple" } );

  // creamos la malla
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);//rotamos el cubo

  return cube;
}

function createCapsula(radius, lenght, seg, radseg) {
  //creamos la capsula
  const geometry = new CapsuleGeometry(radius, lenght, seg, radseg);

  const material = new MeshStandardMaterial( { color: "#F5640C"} );

  const capsule = new Mesh( geometry, material ); 

  capsule.rotation.set(5, 3, 5);
  
  return capsule;
}

function createCircle(radius, segments, start, radseg) {
  const geometry = new CircleGeometry(radius, segments, start, radseg);

  const material = new MeshBasicMaterial();

  const circle = new Mesh(geometry, material);

  circle.rotation.set(10, 3, 5);

  return circle;
}

function createCone(radius, height, lados) {
  const geometry = new ConeGeometry(radius, height, lados);

  const material = new MeshStandardMaterial();

  const cone = new Mesh(geometry, material);

  cone.rotation.set(5, 5, 16);

  return cone;
}

export { createCube, createCapsula, createCircle, createCone };
