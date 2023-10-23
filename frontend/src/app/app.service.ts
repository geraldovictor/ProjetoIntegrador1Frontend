import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDadosVoo } from 'src/shared/model/dados-voos.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }


  getDadosVoo() {
    return this.http.get(this.apiRoot.concat('dados-voo/'));
  }

  createDadosVoo(dadosVoo: IDadosVoo) {
    return this.http.post<IDadosVoo>(this.apiRoot + 'dados-voo/', dadosVoo, { observe: 'response' });
  }
}
