import { DirectionalLight, PointLight, SpotLight, TextureLoader, RectAreaLight, AmbientLight,
HemisphereLight } from 'three';

class Lights {
 Directionalight() {
    const light = new DirectionalLight('white', 8);//Color de la luz, Itensidad de la luz

    // movemos la luz, osea la posicion
  light.position.set(20, 15, 10);
  //Ahora la luz brilla desde( 1 0 ,1 0 ,1 0 ), hacia( 0 ,0 ,0 ).

    return light;
 }
 PointLight() {//produce sombras
    const light = new PointLight('white', 20, 50);//color, intensidad, distancia

    light.position.set(10, 10, 15);

    return light;
 }

 SpotLight() {//refleja la luz, se podria usar para espejos o ventanas
   const light = new SpotLight('white', 8, 30, Math.PI/2, .7, .2);
   light.position.set(5, 5, 5);
//---------------------------------------------------------------------------------------------
   //more Information (https://threejs.org/docs/#api/en/lights/SpotLight)
//---------------------------------------------------------------------------------------------
   light.map = new TextureLoader().load( "../image/foco.jpg" );

   light.castShadow = true;

   light.shadow.mapSize.width = 1024;
   light.shadow.mapSize.height = 1024;

   light.shadow.camera.near = 100
   light.shadow.camera.far = 100;
   light.shadow.camera.fov = 30;

   return light;
 }

 RectAreaLight() {
   const width = 20;
   const height = 20;
   const intensity = 10;
   const rectLight = new RectAreaLight( 0xffffff , intensity,  width, height );
   rectLight.position.set( 5, 5, 10 );

   return rectLight;

   //Get more information HERE JISUS(https://threejs.org/docs/#api/en/lights/RectAreaLight)
 }

 //esta luz iluminado todos los objetos
 AmbientLight() {
   //amientLight ilumina todos los objetos === (no muestra profundidad)
   const ambientLight = new AmbientLight('white', 1);//la intensidad menor para directional produzca ese efecto de sombra

   const mainLight = new DirectionalLight('white', 8);
   mainLight.position.set(10, 10, 10);

   return { ambientLight, mainLight };
 }


 //es similar a AmbientLight, pero es mas barato, tambien depnde de otros luces, para produces mejores efectos
 HemisphereLight() {
   const ambientLight = new HemisphereLight(
      'white', // color que produce
      'darkslategrey', // color de reflejo que produce
      5, // intensity
      //position
    )
    return ambientLight
 }
}

export { Lights };