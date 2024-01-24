import { MathUtils, Mesh } from 'three';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
const geometries = createGeometries();
const materials = createMaterials();

const cabin = new Mesh(geometries.cabin, materials.body);
cabin.position.set(1.5, 1.4, 0);

const chimney = new Mesh(geometries.chimney, materials.detail);
chimney.position.set(-2, 1.9, 0);

//creamos y rotamos la malla de la nariz
const nose = new Mesh(geometries.nose, materials.body);
nose.position.set(-1, 1, 0);
nose.rotation.z = Math.PI / 2;

//creamos las ruedas
const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
smallWheelRear.position.y = 0.5;
smallWheelRear.rotation.x = Math.PI / 2;

//creamos copias de la rueda
const smallWheelCenter = smallWheelRear.clone();
smallWheelCenter.position.x = -1;

const smallWheelFront = smallWheelRear.clone();
smallWheelFront.position.x = -2;

//la RUEDA GRANDE
const bigWheel = smallWheelRear.clone();
bigWheel.position.set(1.5, 0.9, 0);
bigWheel.scale.set(2, 1.25, 2);

//Feat Of Lego
const feat_lego = new Mesh(geometries.feat, materials.lego_feat);
feat_lego.position.set(6, 0, 0);

//creamos el otro pie haciendo una copia
const copie_feat = feat_lego.clone();
copie_feat.position.set(6, 0, .5);

//piernas lego
const leg = new Mesh(geometries.feat_learg, materials.lego_feat);
leg.position.set(5.8, .4, 0);

const copie_leg = leg.clone()
copie_leg.position.set(5.8, .4, .5)
//cuerpo lego
const body = new Mesh(geometries.body, materials.body_lego);
body.position.set(6, 1.4, 0);

//creamos los humos
const humo1 = new Mesh(geometries.humo, materials.humos_color);
humo1.position.set(-2, 1.9, 0);
const humo2 = humo1.clone();
humo2.position.set(-2, 2.3, 0)
const humo3 = humo1.clone();
humo3.position.set(-2, 2.7, 0);

return {
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
    feat_lego,
    copie_feat,
    leg, 
    copie_leg, 
    body,
    humo1, 
    humo2, 
    humo3,
  };
}

export { createMeshes }