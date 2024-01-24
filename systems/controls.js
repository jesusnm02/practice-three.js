import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
//hacemos que se detenga teniendi un peso, osea no se detiene bruscamente
    controls.enableDamping = true;
    /*Puede ajustar para.dampingFactor controlar qué tan rápido se detiene la
     cámara. Sin embargo, para que la amortiguación funcione, debemos llamar controls.update*/
    controls.saveState();
    controls.reset();
    //ToKey, mover la camara usndo las flechas del teclado IMPORTANTE
    controls.listenToKeyEvents(window);
    //la camara girar automaticamente alrededor del target
    controls.autoRotate = true;
    //indica la velocidad de la rotación
    controls.autoRotateSpeed = 5;
    //podemos limitar la distancia del zoom de la camara
    controls.minDistance = 5;
    controls.maxDistance = 60;

    //podemos limitar el angulo de giro
    controls.minPolarAngle = 0; // comienza desde arriba del target y 
    controls.maxPolarAngle = Math.PI / 2; // termina en 90 en sentido horario

    // sirve para desactivar los controles  (controls.dispose();)

    /*para desactivar algunas funciones de la camara
        controls.enableRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false
    */

    controls.tick = () => controls.update();
    return controls;
}

export { createControls };