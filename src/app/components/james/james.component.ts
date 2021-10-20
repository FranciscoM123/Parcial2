import { Component, OnInit } from '@angular/core';
import { JugadoresFranciscoService, Jugador } from '../../services/jugadores-francisco.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent implements OnInit {
  jugador:Jugador[] = []
  james:Jugador[]

  constructor(private _servicio:JugadoresFranciscoService) { 
    this.james = [{
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

    for(let james of this.jugador){
      if(james.nombre == "James Rodriguez"){
        this.james = [{
          nombre: james.nombre,
          bio: james.bio,
          equipo: james.equipo,
          img: james.img,
          nacimiento: james.nacimiento,
          seleccion: james.seleccion
        }]
      }
    }
  }

}
