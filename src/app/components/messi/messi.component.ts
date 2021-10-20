import { Component, OnInit } from '@angular/core';
import { JugadoresFranciscoService, Jugador} from 'src/app/services/jugadores-francisco.service';



@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit {
  jugador: Jugador[] = []
  messi: Jugador[]

  constructor(private _servicio:JugadoresFranciscoService) { 
    this.messi = [{
      nombre: "",
      bio: "",
      equipo: "",
      img: "",
      nacimiento: "",
      seleccion: ""
    }]
  }

  ngOnInit(): void {
    this.jugador = this._servicio.getJugadores()

    for(let messi of this.jugador){
      if(messi.nombre == "Leonel Messi"){
        this.messi = [{
          nombre: messi.nombre,
          bio: messi.bio,
          equipo: messi.equipo,
          img: messi.img,
          nacimiento: messi.nacimiento,
          seleccion: messi.seleccion
        }]
      }
    }
  }

}
