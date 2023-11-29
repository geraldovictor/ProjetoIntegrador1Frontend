import { Component } from '@angular/core';
import { Voo, IVoo, IInstante, Instante } from 'src/shared/model/dados-voos.model';
import { AppService } from '../../../app.service' ;
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'frontend';
  file: any;
  pressaoInicial: any;
  volumeAgua: any;
  pesoFoguete: any;
  pressaoBomba: any;
  anguloLancamento: any;
  idVoo: any;
  dadosVoo: IVoo = new Voo();
  dadosInstante: IInstante = new Instante();


  constructor(private appService: AppService) {

  }

  fileChanged(e: any) {
    this.file = e.target.files[0];
  }

  pressaoChanged(e: any) {
    this.pressaoInicial = e.target.value;
  }

  volumeChanged(e: any) {
    this.volumeAgua = e.target.value;
  }

  pressaoBombaChanged(e:any){
    this.pressaoBomba = e.target.value;
  }

  pesoChanged(e:any){
    this.pesoFoguete = e.target.value;
  }

  anguloChanged(e:any){
    this.anguloLancamento = e.target.value;
  }

  uploadInput(e: any) {
    var jsonData = {
      volumeinicialAgua: this.volumeAgua,
      pressaoInicial: this.pressaoInicial,
      pesoFoguete: this.pesoFoguete,
      pressaoBomba: this.pressaoBomba,
      anguloLancamento: this.anguloLancamento
    };
    console.log(jsonData)
    this.appService.createDadosVoo(jsonData).subscribe((res: HttpResponse<IVoo>) => {
      this.dadosVoo = !!res.body ? res.body : jsonData;
      this.idVoo = this.dadosVoo.idVoo;
    })
  }
  
  // uploadFileVoo(e: any){
  //   let fileReader = new FileReader();
  //   fileReader.onload = (e) => {
  //     console.log(fileReader.result);
  //     this.dadosVoo = JSON.parse(fileReader.result as string);
  //     this.appService.createDadosVoo(this.dadosVoo).subscribe((res: HttpResponse<IVoo>) => {
  //       this.dadosVoo = !!res.body ? res.body : this.dadosVoo;
  //     })
  //   }
  //   fileReader.readAsText(this.file);
  // }
  uploadFileInstante(e: any){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.dadosInstante = JSON.parse(fileReader.result as string);
      this.appService.createInstanteVoo(this.dadosInstante).subscribe((res: HttpResponse<IInstante>) => {
        this.dadosInstante = !!res.body ? res.body : this.dadosInstante;
      })
    }
    fileReader.readAsText(this.file);
  }
}