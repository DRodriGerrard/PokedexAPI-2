import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: '',   redirectTo: '/listComplete', pathMatch: 'full'},
  {path: 'listComplete', component: MasterComponent},
  {path: 'listComplete/:name', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
