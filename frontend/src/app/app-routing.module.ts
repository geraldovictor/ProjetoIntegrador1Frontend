import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VooComponent } from './components/voo/voo.component';

const routes: Routes = [
  {path : 'voo/', component: VooComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
