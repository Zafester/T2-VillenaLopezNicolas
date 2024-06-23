import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/angular/angular.module';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule, MatTableModule, FormsModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {
  mostrarResultado = false;
  resultadoFinal = "";
  formUtilidad = {
    nombre: "",
    salario: null,
    anios: null
  }
  trabajadoresLista: Trabajador = []

  calcularUtilidad(): void{
    let valorAño= Number(this.formUtilidad.anios)
    let utilidadUno = Number(this.formUtilidad.salario) * 0.05
    let utilidadDos = Number(this.formUtilidad.salario) * 0.07
    let utilidadTres = Number(this.formUtilidad.salario) * 0.10
    let utilidadCuatro = Number(this.formUtilidad.salario) * 0.15
    let utilidadCinco = Number(this.formUtilidad.salario) * 0.20
    
    var calculo = ""
    if(valorAño <= 0 ){
      calculo: utilidadUno;
    }else if(valorAño >= 1 && valorAño < 2){
      calculo: utilidadDos;
    }else if(valorAño >= 2 && valorAño < 5){
      calculo: utilidadTres;
    }else if(valorAño >=5 && valorAño < 10 ){
      calculo: utilidadCuatro;
    }else {
      calculo: utilidadCinco
    }
    this.mostrarResultado = true
    this.resultadoFinal = "Su Utilidad es = " + valorAño.toFixed(2).toString+ "," + calculo
    this.trabajadoresLista.push({id: this.trabajadoresLista.length+1,
      nombre: this.formUtilidad.nombre,
      salario: valorAño.toFixed(2).toString(),
      anios: calculo

    })
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
type Trabajador = Array<{id: number; nombre: String; salario: String; anios: String}>