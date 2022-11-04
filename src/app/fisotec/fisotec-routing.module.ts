import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FisotecViewComponent } from './views/fisotec-view/fisotec-view.component';

const routes: Routes = [
  {
    path: 'informacion-elemento',
    component: FisotecViewComponent,
  },
  {
    path: 'analisis-grafico',
    component: FisotecViewComponent,
  },
  {
    path: '**',
    redirectTo: 'informacion-elemento',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FisotecRoutingModule { }
