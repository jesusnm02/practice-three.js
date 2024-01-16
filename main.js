import { World, geometryCone, geometryLathe } from './subcomponentes/world.js';
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
  geomtries.render();
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
    geomtries.render();
    }
    
    showlathe() {
      const container = document.querySelector('#lathe');

      const geomtries = new geometryLathe(container);

      geomtries.render();
    }
}

const geometrieswieber = new showGeometries();
geometrieswieber.showCapsule();
geometrieswieber.showCircle();
geometrieswieber.showCone();
geometrieswieber.showlathe();
main();
