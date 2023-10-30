import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public precoAlcool: string = ''
  public precoGasolina: string = ''
  public resultado: string = 'Resultado'

  calcular() {

    //Validar se os caompos foram preenchidos
    if( this.precoAlcool && this.precoGasolina) {
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      /* Cálculo (precoAlcool / precoGasolina)
        se: resultado >= 0.7 melhor utilizar gasolina
        senão: melhor utilizar álcool
      */
      var res = pAlcool / pGasolina
      if(res >= 0.7) {
        this.resultado = "É melhor utilizar Gasolina"
      } else {
        this.resultado = "É melhor utilizar Álcool"
      }

    } else {
      this.resultado= "Preencha corretamente os campos!"
    }
    

  }


}
