import { BoxGeometry, Mesh, MeshBasicMaterial, CapsuleGeometry, CircleGeometry, MeshStandardMaterial
, ConeGeometry, Vector2, LatheGeometry, MathUtils  } from 'three';

const spec = {
  color: 'purple',
  color : '#F5640C',
  }
  
const material = new MeshStandardMaterial(spec);

const radiansPerSecond = MathUtils.degToRad(360);

function createCube() {
  // creamos la geometria
  const geometry = new BoxGeometry(2, 2, 2);

  // definimos el material
  const material = new MeshStandardMaterial( { color: "purple" } );

  // creamos la malla
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);//rotamos el cubo
//enviamos las animaciones
  cube.tick = (delta) => {
    //con delta hacemos que la velocidad de la animacion no cambie, aunque el ordenador sea lento, aunque si puede cambiar la velocidad de las fotogramas
    // increase the cube's rotation each frame, esto gira de 30 grados por segundo
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.position.x += (102 % 10) * delta;
};
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

function createLatheGeometry() {
  const points = [];
  for ( let i = 0; i < 18; i ++ ) {             //Radius
	points.push( new Vector2( Math.sin( i * 0.2 ) * 20 + 5, ( i - 5 ) * 2 ) );
  }
  const geometry = new LatheGeometry( points );
  const material = new MeshStandardMaterial( { color: 0xffff00 } );
  const lathe = new Mesh( geometry, material )
  lathe.rotation.set(15, 0, 0);

  return lathe;
}

export { createCube, createCapsula, createCircle, createCone, createLatheGeometry };
