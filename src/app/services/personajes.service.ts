import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {


  private personajes: any[] =[

      {
        id: 1,
        name: "Rick Sanchez",
        status: "Vivo",
        species: "Humano"
      },
      {
        id: 2,
        name: "Summer Smith",
        status: "Viva",
        species: "Humana"
      },
      {
        id: 3,
        name: "Morty Smith",
        status: "Vivo",
        species: "Humano"
      },
      {
        id: 4,
        name: "Beth Smith",
        status: "Viva",
        species: "Humana"
      }

  ]

  constructor() { }

  getPersonajes(){
    return this.personajes;

  }
}
