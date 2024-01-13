class Resizer {
    constructor(container, camera, renderer) {
      // ponemos el tamaño de la escena
      camera.aspect = container.clientWidth / container.clientHeight;
  
      // actualiza frustum
      camera.updateProjectionMatrix();
  
      // update the size of the renderer AND the canvas
      renderer.setSize(container.clientWidth, container.clientHeight);
  
      // set the pixel ratio (for mobile devices)
      renderer.setPixelRatio(window.devicePixelRatio);
    }
  }
  
  export { Resizer };