import {Component, OnInit} from '@angular/core';
import {ARTICULOS} from "./mock-articulos";
import {Articulo} from "./articulo";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  articulos:Array<Articulo> = ARTICULOS;
  articulo:Articulo = this.articulos[3]
  botonActivo:boolean = true

  constructor(){
    console.log("Constructor...")
  }
  ngOnInit(){
    console.log("ngOnInit...")
    setTimeout(() => {
      // alert("Activo boton...");
      this.botonActivo=false
    },5000);
  }

}
