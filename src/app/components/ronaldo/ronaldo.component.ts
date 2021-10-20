import { Component, OnInit } from '@angular/core';
import { JugadoresFranciscoService, Jugador } from 'src/app/services/jugadores-francisco.service';

@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html',
  styleUrls: ['./ronaldo.component.css']
})
export class RonaldoComponent implements OnInit {

  jugador: Jugador[] = []
  ronaldo: Jugador[]

  constructor(private _servicio:JugadoresFranciscoService) { 
    this.ronaldo = [{
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

    for(let ronaldo of this.jugador){
      if(ronaldo.nombre == "Cristiano Ronaldo"){
        this.ronaldo = [{
          nombre: ronaldo.nombre,
          bio: ronaldo.bio,
          equipo: ronaldo.equipo,
          img: ronaldo.img,
          nacimiento: ronaldo.nacimiento,
          seleccion: ronaldo.seleccion
        }]
      }
    }
  }

}
