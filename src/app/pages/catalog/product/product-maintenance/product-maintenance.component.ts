import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.scss']
})
export class ProductMaintenanceComponent implements OnInit {

  private linhaCorETamanho : Array<number> = new Array<number>();
  constructor() { }

  ngOnInit() {
    this.linhaCorETamanho.push(1);
  }

  private cores = [
    {"id" : 1, "nome" : "Sem cor"},
    {"id" : 2, "nome" : "Branco"},
    {"id" : 3, "nome" : "Preto"},
    {"id" : 4, "nome" : "Vermelho"},
    {"id" : 5, "nome" : "Laranja"},
    {"id" : 6, "nome" : "Azul"},
  ]

  private tamanhos = [
    {"id" : 1, "nome" : "Tamanho único"},
    {"id" : 2, "nome" : "PP"},
    {"id" : 3, "nome" : "P"},
    {"id" : 4, "nome" : "M"},
    {"id" : 5, "nome" : "G"},
    {"id" : 6, "nome" : "GG"},
    {"id" : 7, "nome" : "XG"},
  ]


  inserirLinha(){
    this.linhaCorETamanho.push(1);
  }

  removeLinha(index){
    console.log(index);
    this.linhaCorETamanho = this.linhaCorETamanho.splice((index-1), 1);
  }
}
