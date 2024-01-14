import { WebGLRenderer } from 'three';

function createRenderer_ilumination() {
    const renderer = new WebGLRenderer();

    // prendemos la iluminación correcta
    renderer.physicallyCorrectLights = true;

    return renderer;
}

export{ createRenderer_ilumination };