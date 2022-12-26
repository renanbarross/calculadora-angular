import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // Botões: números, ponto, limpar e backspace

  numero: any = 0;

  telaLimpa: boolean = true;

  getNumero(numero: any) {
    if (this.telaLimpa == true) {
      this.numero = "";
      this.numero = numero;
      this.telaLimpa = false;
    } else {
      this.numero = this.numero.concat(numero);
    }
    this.piscada = false;
  }

  limpar() {
    this.numero = 0;
    this.parteArmazenada = "";
    this.telaLimpa = true;
    this.piscada = false;
  }

  backspace() {
    this.numero = this.numero.substr(0, this.numero.length - 1);
  }

  // Botões: operadores

  parteArmazenada: any = "";

  operador: string = "";

  piscada: boolean = false;

  usarOperador(operador: string) {
    if (this.parteArmazenada == "") {
      this.parteArmazenada = parseFloat(this.numero);
    } else {
      switch (this.operador) {
        case "+":
          this.parteArmazenada = parseFloat(this.parteArmazenada) + parseFloat(this.numero);
          break;
        case "-":
          this.parteArmazenada = parseFloat(this.parteArmazenada) - parseFloat(this.numero);
          break;
        case "*":
          this.parteArmazenada = parseFloat(this.parteArmazenada) * parseFloat(this.numero);
          break;
        case "/":
          this.parteArmazenada = parseFloat(this.parteArmazenada) / parseFloat(this.numero);
          break;
      }
    }
    this.operador = operador;
    this.telaLimpa = true;
    this.piscada = true;
  }

  // Botão: igual

  mostrarResultado() {
    switch (this.operador) {
      case "+":
        this.numero = (parseFloat(this.parteArmazenada) + parseFloat(this.numero)).toString();
        break;
      case "-":
        this.numero = (parseFloat(this.parteArmazenada) - parseFloat(this.numero)).toString();
        break;
      case "*":
        this.numero = (parseFloat(this.parteArmazenada) * parseFloat(this.numero)).toString();
        break;
      case "/":
        this.numero = (parseFloat(this.parteArmazenada) / parseFloat(this.numero)).toString();
        break;
    }
    this.parteArmazenada = "";
    this.telaLimpa = true;
    this.piscada = false;
  }

  ngOnInit() {
  }

}