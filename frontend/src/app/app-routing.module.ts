import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VooComponent } from './components/voo/voo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path : '', component: HomeComponent },
  {path : 'voo', component: VooComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
