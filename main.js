import { GIft, Grupos, Trainers, World, geometryCone, geometryLathe } from './subcomponentes/world.js';
import { geometryCapsule } from './subcomponentes/world.js';
import { geometryCircle } from './subcomponentes/world.js';
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.start();
}

class showGeometries {
  showCapsule() {
  // Get a reference to the container element
  const container = document.querySelector('#capsule');

  // 1. Create an instance of the World app
  const geomtries = new geometryCapsule(container);

  // 2. Render the scene
  geomtries.start();
  }
  //////////////CIRCLE----------------
  showCircle() {
    // Get a reference to the container element
    const container = document.querySelector('#circle');
  
    // 1. Create an instance of the World app
    const geomtries = new geometryCircle(container);
  
    // 2. Render the scene
    geomtries.render();
    }

  showCone() {
    // Get a reference to the container element
    const container = document.querySelector('#cone');
  
    // 1. Create an instance of the World app
    const geomtries = new geometryCone(container);
  
    // 2. Render the scene
    geomtries.start();
    }
    
    showlathe() {
      const container = document.querySelector('#lathe');

      const geomtries = new geometryLathe(container);

      geomtries.render();
    }

    showSphere() {
      const container = document.querySelector('#group')

      const geomtries = new Grupos(container)

      geomtries.start()
    }

    showTrain() {
      const container = document.querySelector('#train')

      const geometries = new Trainers(container)

      geometries.start()
    }
}

//funciones asincronas
async function gitf() {
  const container = document.querySelector('#gitf');

  const giftttt = new GIft(container);

  await giftttt.init();

  giftttt.start()
}

const geometrieswieber = new showGeometries();
geometrieswieber.showCapsule();
geometrieswieber.showCircle();
geometrieswieber.showCone();
geometrieswieber.showlathe();
geometrieswieber.showTrain();

//mostramos los grupos
geometrieswieber.showSphere();
main();

gitf().catch((err) => {
  console.error(err);
});
