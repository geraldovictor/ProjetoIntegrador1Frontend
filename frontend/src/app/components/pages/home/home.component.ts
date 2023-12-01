import { Component, OnInit } from '@angular/core';
import { Voo, IVoo, IInstante, Instante } from 'src/shared/model/dados-voos.model';
import { AppService } from '../../../app.service' ;
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
  voos_counter: any;


  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    // Call the method to load data when the component is initialized
    this.appService.getCounterVoo().subscribe(
      (res: any) => {
        // Assuming res.body contains the response body
        this.voos_counter = res.body ? res.body.voo_count : null;
      },
      (error) => {
        console.error('Error loading counter:', error);
      }
    );
  }
  voos_counterRange(): number[] {
    const originalArray =  Array.from({ length: this.voos_counter || 0 }, (_, index) => index);
    return originalArray.reverse();
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