import { MeshStandardMaterial } from 'three';

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: 'firebrick',
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: 'darkslategray',
    flatShading: true,
  });

  const lego_feat = new MeshStandardMaterial({
    color: 'blue',
    flatShading: true,
  });

  const body_lego = new MeshStandardMaterial({
    color: 'red',
    flatShading: true,
  });

  const humos_color = new MeshStandardMaterial({
    color: '#A7A4A1',
    flatShading: false,
  });

  return { body, detail, lego_feat, body_lego, humos_color };
}

export { createMaterials };