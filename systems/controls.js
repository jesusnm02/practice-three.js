import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
//hacemos que se detenga teniendi un peso, osea no se detiene bruscamente
    controls.enableDamping = true;
    /*Puede ajustar para.dampingFactor controlar qué tan rápido se detiene la
     cámara. Sin embargo, para que la amortiguación funcione, debemos llamar controls.update*/

    controls.tick = () => controls.update();
    return controls;
}

export { createControls };