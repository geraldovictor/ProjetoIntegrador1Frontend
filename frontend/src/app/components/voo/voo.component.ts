import { Component } from '@angular/core';

@Component({
  selector: 'app-voo',
  templateUrl: './voo.component.html',
  styleUrls: ['./voo.component.css']
})
export class VooComponent {
  //Importar dados certos do json que virá do backend
  peso = 1.5; 
  pressao = 40;
  angulo = 45;
}
