import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInstante, IVoo} from 'src/shared/model/dados-voos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiRoot = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }


  getDadosVoo() {
    return this.http.get(this.apiRoot.concat('dados-voo/'));
  }

  getSpecificVoo(id: any)  {
    return this.http.get(this.apiRoot.concat('dados-voo/' + id + '/'));
  }

  getCounterVoo(): Observable<any> {
    return this.http.get(this.apiRoot.concat('count-voos/'), { observe: 'response' });
  }

  createDadosVoo(dadosVoo: IVoo) {
    return this.http.post<IVoo>(this.apiRoot + 'dados-voo/', dadosVoo, { observe: 'response' });
  }

  getInstanteVoo() {
    return this.http.get(this.apiRoot.concat('dados-instante/'));
  }

  createInstanteVoo(dadosInstante: IInstante) {
    return this.http.post<IInstante>(this.apiRoot + 'dados-instante/', dadosInstante, { observe: 'response' });
  }
}