import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel';

async function loadBirds() {
const loader = new GLTFLoader();

const [parrotData, flamingoData, storkData] = await Promise.all([
    loader.loadAsync('/../../models/Parrot.glb'),
    loader.loadAsync('/../../models/Flamingo.glb'),
    loader.loadAsync('/../../models/Stork.glb'),
    ]);

/*ESTE METODO ES EL MAS Basico, pero lo que sucede es que cuando flamingoData, primero se debe cargr parrotdata,
osea los objetos cargaran por partes, lo que queremos haces es que los tres primeros objetos carguen al mismo tiempo
const parrotData = await loader.loadAsync('/assets/models/Parrot.glb');
const flamingoData = await loader.loadAsync('/assets/models/Flamingo.glb');
const storkData = await loader.loadAsync('/assets/models/Stork.glb');

const parrot = setupModel(parrotData);
const flamingo = setupModel(flamingoData);
const stork = setupModel(storkData);

*/

console.log('Squaaawk!', parrotData);

const flamingo = setupModel(flamingoData);
flamingo.position.set(40, 0, -10);

const stork = setupModel(storkData);
stork.position.set(0, -2.5, -10);

const parrot = setupModel(parrotData);
parrot.position.set(-40, 0, 2.5);

return { parrot, flamingo, stork }
}

export { loadBirds };