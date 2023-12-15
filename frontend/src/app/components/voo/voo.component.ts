import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service' ;
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-voo',
  templateUrl: './voo.component.html',
  styleUrls: ['./voo.component.css']
})
export class VooComponent implements OnInit {
  //Importar dados certos do json que virá do backend
  peso: any; 
  pressao: any;
  angulo: any;
  volume: any;
  distancia: any;
  instantes: any;
  id: any;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.appService.getSpecificVoo(this.id).subscribe(
      (res:any) => {
        this.pressao = res ? res.pressaoInicial : null;
        this.peso = res ? res.pesoFoguete : null;
        this.angulo = res ? res.anguloLancamento : null;
        this.distancia = res ? res.pressaoBomba : null;
        this.volume = res ? res.volumeinicialAgua : null;
      },
      (error) => {
        console.error('Error loading counter:', error);
      }
    )
    this.appService.getInstanteByVoo(this.id).subscribe(
      (res:any) => {
        this.instantes = res;
        console.log(this.instantes);
      }
    )
}
  
}
