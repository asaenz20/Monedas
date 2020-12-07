import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonedasService {

  private monedas:moneda[]=
  [
    {
        "nombre": "Corona Noruega",
        "pais_origen":"Noruega",
        "emisor":"Banco de Noruega",
        "codigo_iso":"NOK",
        "lugares_funciona":["Noruega"],
        "imagen": "assets/imagenes/corona_noruega.jpg"
    },
    {
        "nombre": "Corona Sueca",
        "pais_origen":"Suecia",
        "emisor":"Banco de Suecia",
        "codigo_iso":"SEK",
        "lugares_funciona":["Suecia"],
        "imagen": "assets/imagenes/corona_sueca.jpg"
    },
    {
        "nombre": "Dinar Kwaití",
        "pais_origen":"Kuwait",
        "emisor":"Banco central de Kuwait",
        "codigo_iso":"KWD",
        "lugares_funciona":["Kwait"],
        "imagen": "assets/imagenes/dinar.jpg"
    },
    {
        "nombre": "Dolar Estadounidense",
        "pais_origen":"Estados Unidos ",
        "emisor":"Sistema de reserva federal",
        "codigo_iso":"USD",
        "lugares_funciona":["El salvador","Ecuador","Panamá","Puerto Rico","Caribe Neerlandés","Islas Turcas",
            "Islas virgenes","Venezuela","Guam","Islas Marshall","Estados Federados de Micronesia","Palaos",
            "Islas Marianas del Norte","Samoa Americana","Timor Oriental","Territorio Británico del oceano Indico",
        "Zimbabue"],
        "imagen": "assets/imagenes/dolar_eu.jpg"
    },
    {
        "nombre": "Dolar Australiano",
        "pais_origen":"Australia",
        "emisor":"Banco de Reserva de Australia",
        "codigo_iso":"AUD",
        "lugares_funciona":["Kiribati","Nauru","Tuvalu","Isla de Navidad","Islas Cocos","Isla Norfolk","Zimbabue"],
        "imagen": "assets/imagenes/dolar_australiano.jpg"
    },
    {
        "nombre": "Dolar Canadiense",
        "pais_origen":"Canadá",
        "emisor":"Banco de Canada",
        "codigo_iso":"CAD",
        "lugares_funciona":["Canadá"],
        "imagen": "assets/imagenes/dolar_canada.jpg"
    },
    {
        "nombre": "Dolar de Hong Kong",
        "pais_origen":"Hong Kong",
        "emisor":"Autoridad Monetaria de Hong Kong",
        "codigo_iso":"HKD",
        "lugares_funciona":["Hong Kong"],
        "imagen": "assets/imagenes/dola_hongkong.jpg"
    },
    {
        "nombre": "Euro",
        "pais_origen":"Eurozona",
        "emisor":"Banco Central Europeo",
        "codigo_iso":"EUR",
        "lugares_funciona":["Alemania","Austria","Chipre","Eslovaquia","Eslovnia","España","Estonia",
            "Estonia","Finlandia","Francia","Grecia","Irlanda","Letonia","Lituania","Luxemburgo",
            "Malta","Paises Bajos","Portugal","Andorra","Ciudad del Vaticano","Monaco","San Marino",
            "Kosovo","Montenegro"],
        "imagen": "assets/imagenes/euro.jpg"
    },
    {
        "nombre": "Franco Suizo",
        "pais_origen":"Suiza",
        "emisor":"Banco Nacional de Suiza",
        "codigo_iso":"CHF",
        "lugares_funciona":["Liechtenstein","Champione d'Italia","Büsinguen am Hochrhein"],
        "imagen": "assets/imagenes/franco_suizo.jpg"
    },
    {
        "nombre": "Libra Esterlina",
        "pais_origen":"Reino Unido",
        "emisor":"Bando de Inglaterra",
        "codigo_iso":"GBP",
        "lugares_funciona":["Territorio Antártico Británico, Islas Malvinas","Gibraltar","Islas Georgias del sur",
            "Santa Elena Ascensión y Tristán de Acuña","Territorio Británico del Oceano Indico","Isla de Man",
        "Guernsey","Jersey"],
        "imagen": "assets/imagenes/libra_esterlina.jpg"
    },
    {
        "nombre": "Peso Argentino",
        "pais_origen":"Argentina",
        "emisor":"Banco central de la republica Argentina",
        "codigo_iso":"ARP",
        "lugares_funciona":["Argentina"],
        "imagen": "assets/imagenes/peso_argentino.jpg"
    },
    {
        "nombre": "Peso Chileno",
        "pais_origen":"Chile",
        "emisor":"Banco central de Chile",
        "codigo_iso":"CLP",
        "lugares_funciona":["Chile"],
        "imagen": "assets/imagenes/peso_chileno.jpg"
    },
    {
        "nombre": "Peso Colombiano",
        "pais_origen":"Colombia",
        "emisor":"Banco de la república de Colombia",
        "codigo_iso":"COP",
        "lugares_funciona":["Colombia"],
        "imagen": "assets/imagenes/peso_colombiano.jpg"
    },
    {
        "nombre": "Sol Peruano",
        "pais_origen":"Perú",
        "emisor":"Banco central de la reserva del Perú",
        "codigo_iso":"PEN",
        "lugares_funciona":["Perú"],
        "imagen": "assets/imagenes/sol_peru.jpg"
    },
    {
        "nombre": "Yen Japonés",
        "pais_origen":"Japón",
        "emisor":"Banco de Japón",
        "codigo_iso":"JPY",
        "lugares_funciona":["Japón","Zimbabue"],
        "imagen": "assets/imagenes/yen_japones.jpg"
    }
  ];

  
  
  constructor() {console.log("Servicio de Monedas, CARGADO, enviando informe a APOLLO") };

  obtenermonedas():moneda[]
  {
    return this.monedas;
  }
  obtenermoneda(iso:string):moneda
  {
    for(let i=0;i<this.monedas.length;i++)
    {
        let moneda=this.monedas[i];
        if(moneda.codigo_iso==iso)
        {
            return moneda;
        }
    }
  }
  obtenerpaises(iso:string):string[]
  {
      for(let i=0;i<this.monedas.length;i++)
      {
          let moneda=this.monedas[i];
          if(moneda.codigo_iso==iso)
          {
              return moneda.lugares_funciona;
          }
      }
  }

}
export interface moneda
{
  nombre:string;
  pais_origen:string;
  emisor:string;
  codigo_iso:string;
  lugares_funciona:string[];
  imagen:string;
  indice?:number;
};
