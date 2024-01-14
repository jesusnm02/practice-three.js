import { DirectionalLight, PointLight } from 'three';

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
}

export { Lights };