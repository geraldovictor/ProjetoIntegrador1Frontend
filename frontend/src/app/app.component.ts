import { Component } from '@angular/core';
import { Voo, IVoo } from 'src/shared/model/dados-voos.model';
import { Instante, IInstante } from 'src/shared/model/dados-voos.model';
import { Eixo, IEixo } from 'src/shared/model/dados-voos.model';
import { AppService } from './app.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  file: any;
  dadosVoo: IVoo = new Voo();
  Instante: IInstante = new Instante();
  Eixo: IEixo = new Eixo();


  constructor(private appService: AppService) {

  }

  fileChanged(e: any) {
    this.file = e.target.files[0];
  }
  
  uploadFile(e: any){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.dadosVoo = JSON.parse(fileReader.result as string);
      this.appService.createDadosVoo(this.dadosVoo).subscribe((res: HttpResponse<IVoo>) => {
        this.dadosVoo = !!res.body ? res.body : this.dadosVoo;
      })
      this.appService.createInstante(this.Instante).subscribe((res1: HttpResponse<IInstante>) => {
        this.Instante = !!res1.body ? res1.body : this.Instante;
      })
      this.appService.createEixo(this.Eixo).subscribe((res2: HttpResponse<IEixo>) => {
        this.Eixo = !!res2.body ? res2.body : this.Eixo;
      })
    }
    fileReader.readAsText(this.file);
  }
}
