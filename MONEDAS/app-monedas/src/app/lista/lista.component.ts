import { Component, OnInit } from '@angular/core';
import { moneda, MonedasService } from '../monedas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private monedaservicio:MonedasService) { }
  monedas:moneda[]=[];
  width:number=100;
  margin:number=20;
  

  ngOnInit(): void {
    this.monedas=this.monedaservicio.obtenermonedas();
    
  }

}
