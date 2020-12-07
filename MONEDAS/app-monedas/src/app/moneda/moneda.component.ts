import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MonedasService, moneda } from '../monedas.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {
  iso:string;
  paises:string[];
  moneda:moneda;
  titulo:string;
  width:number=200;
  margin:number=50;

  constructor(private route:ActivatedRoute,
    private monedaservicio:MonedasService,
    private router:Router) 
    { }


  ngOnInit(): void 
  {
    let ISO=this.route.snapshot.paramMap.get('id');
    this.iso=ISO;
    this.paises=this.monedaservicio.obtenerpaises(ISO);
    this.moneda=this.monedaservicio.obtenermoneda(ISO);
    this.titulo=this.moneda.nombre;
    console.log(this.moneda)
  }
  Atras():void
  {
    this.router.navigate(['lista']);
  }

}
