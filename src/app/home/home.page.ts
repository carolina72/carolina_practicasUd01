import { Component, OnInit } from '@angular/core';

class ClaseElemento {
  private nombre: string;
  private icono: string;
  private enlace: string;


constructor(nombre: string, icono: string, enlace: string) {
  this.nombre = nombre;
  this.icono = icono;
  this.enlace = enlace;
}

public getEnlace(): string {
  return this.enlace;
}

public setEnlace(value: string) {
  this.enlace = value;
}

public getIcono(): string {
  return this.icono;
}

public setIcono(value: string) {
  this.icono = value;
}

public getNombre(): string {
  return this.nombre;
}

public setNombre(value: string) {
  this.nombre = value;
}

}

// Crea el tipo elemento con type
type TElemento = {
  nombre: string;
  icono: string;
  enlace: string;
};

// Crea el tipo elemento con interface
interface IElemento {
  nombre: string;
  icono: string;
  enlace: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  // si trabajamos con Type o interface, usamos el formato json para definir el array
  valoresLista: IElemento[] = [
    {
      nombre: 'Item 1',
      icono: 'triangle',
      enlace: '/tabs/tab1'
    },
    {
      nombre: 'Item 2',
      icono: 'image',
      enlace: '/tabs/tab2'
    },
    {
      nombre: 'Item 3',
      icono: 'square',
      enlace: '/tabs/tab3'
    }
  ];

  // si trabajamos con la clase, no se puede usar json, se tiene que usar new

  listaObjetos: ClaseElemento [] = [
    new ClaseElemento('Item 1', 'alarm-outline', '/tabs/tab1'),
    new ClaseElemento('Item 2', 'car-outline', '/tabs/tab2'),
    new ClaseElemento('Item 3', 'balloon-outline', '/tabs/tab3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
