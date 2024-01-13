import { World } from './subcomponentes/world.js';
import { geometryCapsule } from './subcomponentes/world.js';
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

function showGeometries() {
  // Get a reference to the container element
  const container = document.querySelector('#capsule');

  // 1. Create an instance of the World app
  const geomtries = new geometryCapsule(container);

  // 2. Render the scene
  geomtries.render();


  //////////////CIRCLE----------------
}

showGeometries();
main();
