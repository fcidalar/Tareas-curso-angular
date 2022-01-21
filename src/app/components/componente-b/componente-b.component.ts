import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  dataPersonajes:any;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {

    this.cargaData();

  }


  cargaData(){
    this.dataPersonajes = this.personajeService.getPersonajes();
  }



}
