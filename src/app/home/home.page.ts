import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public resultado: String = "Resultado";
  public precoAlcool: number = 0;
  public precoGasolina: number = 0;

  calcular() {
    if(this.precoAlcool && this.precoGasolina) {
      let melhor = this.precoAlcool / this.precoGasolina;

      this.resultado = (melhor >= 0.7 ? "Melhor utilizar gasolina." : "Álcool vai ser melhor.");
    } else {
      this.resultado = "Preencha os dois campos.";
    }
  }
}
