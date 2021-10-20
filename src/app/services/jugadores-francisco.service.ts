import { Injectable } from '@angular/core';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';

@Injectable({
    providedIn: 'root'
})
export class JugadoresFranciscoService {

    private jugadores:Jugador[] = [
        {
          nombre: "James Rodriguez",
          bio: "futbolista colombiano, que juega como centrocampista y su equipo actual es Al Rayyan S. C. de la Qatar Stars League. Recibió en 2009, 2012 y 2014 el premio de jugador revelación de la Primera División de Argentina y en la Primeira Liga de Portugal.",
          img: "assets/img/james.jpg",
          nacimiento: "12 de julio de 1991",
          seleccion:"Colombia",
          equipo:"Everton",
        },
        {
          nombre: "Cristiano Ronaldo",
          bio: "futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico",
          img: "assets/img/ronaldo.jpg",
          nacimiento: "5 de febrero de 1985",
          seleccion:"Portugal",
          equipo:"Manchester UNITED",
        },
        {
          nombre: "Leonel Messi",
          bio: "futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la selección de Argentina, equipo del que es capitán y máximo goleador histórico.",
          img: "assets/img/messi.jpg",
          nacimiento: " 24 de junio de 1987",
          seleccion:"Argentina",
          equipo:"PSG",
        },
    ];

    constructor(){
      console.log("Servicio listo para usar!");
    }

  getJugadores():Jugador[]{
    return this.jugadores;
  }
}

export interface Jugador{
    nombre: string;
    bio: string;
    img: string;
    nacimiento: string;
    seleccion: string;
    equipo: string;
}
