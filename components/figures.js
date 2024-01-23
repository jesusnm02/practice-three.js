import { BoxGeometry, Mesh, MeshBasicMaterial, CapsuleGeometry, CircleGeometry, MeshStandardMaterial
, ConeGeometry, Vector2, LatheGeometry, MathUtils, TextureLoader, RepeatWrapping, SphereGeometry, Group } from 'three';

const spec = {
  color: 'purple',
  color : '#F5640C',
  }
  
const material = new MeshStandardMaterial(spec);

const radiansPerSecond = MathUtils.degToRad(360);

const createMaterial = () => {
  //creamos el generador de textura
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '../image/foco.jpg',
    );
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    //el renderizamos de latextura comienza desde el punto indicado .5, .5 es el centro
    texture.center.set(.2, .5);
    //con el siguiente comando repetimos la imagen en la cara de la figura
    texture.repeat.set( 2, 4 );
    //con esto podemos girar las imagenes o las texturas
    texture.rotation = Math.PI * .3;
    //Cuánto se desplaza una sola repetición de la textura desde el principio, 
    //en cada dirección U y V. El rango típico 0.0 es 1.0.
    texture.offset.set(1, 1);

    //more information for jisus (https://threejs.org/docs/#api/en/textures/Texture)

    const material = new MeshStandardMaterial({
      map: texture,
    });
  
  return material;

}
function createCube() {
  // creamos la geometria
  const geometry = new BoxGeometry(2, 2, 2);

  // definimos el material
  const material = createMaterial();

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
//con flatShading en material, podemos visualizar los triangulos que conforman la capsule
  const material = new MeshStandardMaterial( { color: "#F5640C", flatShading: true} );

  /*AQUIIIIIIIII---------------podemos redifinir el nuevo valor de (flatShading)
  material.flatShading = false;
  material.needsUpdate = false;*/

  const capsule = new Mesh( geometry, material ); 

  capsule.rotation.set(5, 3, 5);
  capsule.tick = (delta) => {
    //con delta hacemos que la velocidad de la animacion no cambie, aunque el ordenador sea lento, aunque si puede cambiar la velocidad de las fotogramas
    // increase the cube's rotation each frame, esto gira de 30 grados por segundo
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
};
  
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

function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({
  color: 'indigo',
  });

  // create one prototype sphere
  const protoSphere = new Mesh(geometry, material);

  // add the sphere to the group
  group.add(protoSphere);

  // create twenty clones of the protoSphere
// and add each to the group
  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    //el tamaño de las esferas clonadas
    sphere.scale.multiplyScalar(0.01 + i);
    
    group.add(sphere);
  }

  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(30);

// each frame, rotate the entire group of spheres
  group.tick = (delta) => {
  group.rotation.z -= delta * radiansPerSecond;
};


  return group;
}

export { createCube, createCapsula, createCircle, createCone, createLatheGeometry, createMeshGroup };
