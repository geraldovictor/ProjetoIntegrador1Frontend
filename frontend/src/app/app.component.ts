import { Component } from '@angular/core';
import { DadosVoo, IDadosVoo } from 'src/shared/model/dados-voos.model';
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
  dadosVoo: IDadosVoo = new DadosVoo();

  constructor(private appService: AppService) {

  }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.dadosVoo = JSON.parse(fileReader.result as string);
      this.appService.createDadosVoo(this.dadosVoo).subscribe((res: HttpResponse<IDadosVoo>) => {
        this.dadosVoo = !!res.body ? res.body : this.dadosVoo;
      })
    }
    fileReader.readAsText(this.file);

  }
}
