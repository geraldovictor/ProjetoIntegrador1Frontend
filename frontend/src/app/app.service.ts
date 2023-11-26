import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVoo, IInstante, IEixo } from 'src/shared/model/dados-voos.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiRoot = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }


  getDadosVoo() {
    return this.http.get(this.apiRoot.concat('dados-voo/'));
  }

  createDadosVoo(dadosVoo: IVoo) {
    return this.http.post<IVoo>(this.apiRoot + 'dados-voo/', dadosVoo, { observe: 'response' });
  }
  createInstante(Instante: IInstante) {
    return this.http.post<IInstante>(this.apiRoot + 'dados-voo/', Instante, { observe: 'response' });
  }
  createEixo(Eixo: IEixo) {
    return this.http.post<IEixo>(this.apiRoot + 'dados-voo/', Eixo, { observe: 'response' });
  }
}
