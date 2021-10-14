import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peso: number;
  altura: number;
  imc: number;
  email: string;

  constructor() {}

  onClick() {
    console.log("Botón pulsado");
    this.imc = this.peso/ Math.pow(this.altura, 2);
    this.imc = Math.round(this.imc * 100) / 100;
    console.log(this.imc);
  }
}
