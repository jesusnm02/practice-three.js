import { createCamera } from '../components/camera.js';
import { createCube } from '../components/figures.js';
import { createScene } from '../components/scene.js';
import { createCapsula } from '../components/figures.js';
import { createCircle } from '../components/figures.js';
import { createCone } from '../components/figures.js';
import { createLatheGeometry } from '../components/figures.js';
import { Lights } from '../components/lights.js';
import { createMeshGroup } from '../components/figures.js';
import { loadBirds } from '../components/pajaros/birds.js';

import { createRenderer } from '../systems/renderes.js';
import { Resizer } from '../systems/resizer.js';
import { createRenderer_ilumination } from '../systems/renderer_ilumination.js';
import { Loop } from '../systems/Loop.js';
import { createControls } from '../systems/controls.js';

import { Vector3 } from 'three';
import { MathUtils } from 'three';
import { Train } from '../components/train/trains.js';
import { AxesHelper } from 'three';
import { GridHelper } from 'three';
//----------------SIRVE PARA GUARDAR VECTORES Y LUEGO UTILIZARLOS---------------
const vector = new Vector3(1, 2, 3);

vector.x; // 1
vector.y; // 2
vector.z; // 3

vector.x = 5;

vector.x; // 5

vector.set(7, 7, 7);

vector.x; // 7
vector.y; // 7
vector.z; // 7

/*-------------------------------------------------------------------------------------------
mesh.position = new Vector3();
mesh.position.x; // 0
mesh.position.y; // 0
mesh.position.z; // 0
------------------------------------------------------------------------------------------------*/

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let controls;
let scene;
let loop;

const luces = new Lights();
class World {
  constructor(container) {
    camera = createCamera(0, 0, 10);
    scene = createScene();
    renderer = createRenderer_ilumination();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube1 = createCube();
    const cube2 = createCube();

    const cone = createCone();
  //Enviamos el objecto----------------------------
    loop.updatables.push(cube1);
  //------------------------------------------------

    //----USAMOS LAS ESCALAS .scale();
    cone.scale.set(1, 1, 1);//su tamaño aumenta un 100% osea se mantiene igual
    cube2.scale.set(2, -2, 2);//su tamaño aumenta un 200% osea se duplica
    cube1.scale.set(.5, .5, .5);// su tamaño aumenta un 50% osea se reduce a la mitad
    //-------------------------------

    /*----USAMOS ROTATION CON ANGLE EULER---------------------
    cone.rotation = new Euler();
    cone.rotation.set(1, 1, 1);
    -------------------------------------------------------*/

    //-----------USAMOS RADICIONES PARA ROTAR OBJETOS-------
    cube2.rotation.x = MathUtils.degToRad(60);
    //-----------------------------------------------
    
    const light = luces.Directionalight();

    scene.add(cube1, light, cone);//scene es el padre de cube 1
    cube1.position.y = 1.5;
    cone.position.y = -1;

    cube1.add(cube2);//cube1 es padre de cube
    cube1.rotation.x = MathUtils.degToRad(30);


    cube2.position.y = -3.5;
    cube2.updateMatrix();

    const resizer = new Resizer(container, camera, renderer);
    /*resizer.onResize = () => {  esto es para que cuando se encoga la pantalla se vuelva a renderizar
      this.render();
    };*/
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

class geometryCapsule {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer_ilumination();
    container.append(renderer.domElement);
    loop = new Loop(camera, scene, renderer);
//llamamos el controlador de camara y enviamos los datos necesrios
    const controls = createControls(camera, renderer.domElement);
//controls.target.set(1,2,3);
//Si necesita un objetivo fijo, puede desactivar la panorámica usando controls.enablePan = false.
    const capsule = createCapsula(10, 10);
//hacemos que el objetivo sea the capsule
    controls.target.copy(capsule.position);

    //llamamos las luces
    const { ambientLight, mainLight } = luces.AmbientLight();

    loop.updatables.push(controls);

    scene.add(capsule, ambientLight, mainLight);

    //camera.add(luces.Directionalight), IMPORTANTE este metodo sirve que cuando se mueva la camara, este ilumine
    //la zona qque estamos viendo

    const resizer = new Resizer(container, camera, renderer);

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

class geometryCircle {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
//llamamos al controlador de camara

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
    const camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer_ilumination();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);


    const cone = createCone(20, 20, 4);
    //hacemos que la camara se aleje del objeto
    camera.tick = (delta) => {
      camera.position.z += 100 * delta;
    }

    const light = luces.SpotLight();

    //hacemos que la luz tambien puede rotar dentro de la escena
    light.tick = (delta) => {
      light.position.x += MathUtils.degToRad(360) * delta;
    }

    
    loop.updatables.push(camera, light)


    scene.add(cone, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

class geometryLathe {
  constructor(container) {
    camera = createCamera(0, 0, 80);
    scene = createScene();
    renderer = createRenderer_ilumination();
    container.append(renderer.domElement);

    const lathe = createLatheGeometry();

    const light = luces.RectAreaLight();

    scene.add(lathe, light);

    //podemos realizar cambio de posiciones de la figuras
    const lathe1 = scene.children[0];//podemos llamar a los hijos de las escenas, por array o por su llegada en la escena
    lathe1.position.y = -7;

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

class Grupos {
  constructor(container) {
    camera = createCamera(0, 0, 20);
      renderer = createRenderer_ilumination();
      scene = createScene();
      loop = new Loop(camera, scene, renderer);
      container.append(renderer.domElement);
  
      const controls = createControls(camera, renderer.domElement);
      const { ambientLight, mainLight } = luces.AmbientLight();
      const meshGroup = createMeshGroup();
  
      loop.updatables.push(controls, meshGroup);
      scene.add(ambientLight, mainLight, meshGroup);
  
      const resizer = new Resizer(container, camera, renderer);
    }
  
    render() {
      renderer.render(scene, camera);
    }
  
    start() {
      loop.start();
    }
  
    stop() {
      loop.stop();
    }
}

class Trainers {
  constructor(container) {
    camera = createCamera(0, 0, 20);
    renderer = createRenderer_ilumination();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
  
    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight } = luces.AmbientLight();

    for(let x = 0 ; x < 1; x+= .20) {
      const train = new Train();
      train.position.x = Math.cos(2 * Math.PI * x) * 4
      train.position.z = Math.sin(2 * Math.PI * x) * 4
      train.rotation.y = 2 * Math.PI * x
      loop.updatables.push(train);
      scene.add(ambientLight, mainLight, train);
    }
  
    const resizer = new Resizer(container, camera, renderer);
  
  }
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

class GIft {
  constructor(container) {
    camera = createCamera(0 ,0, 120);
    renderer = createRenderer_ilumination();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = luces.AmbientLight();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position)

    loop.updatables.push(parrot, flamingo, stork);
    //reto, cuando se haga un click el enfoque cambie de pajaro

    scene.add(parrot, flamingo, stork);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
export { World, geometryCapsule, geometryCircle, geometryCone, geometryLathe, Grupos, Trainers, GIft };