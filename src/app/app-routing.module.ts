import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskComponent } from './pages/desk/desk.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SignComponent } from './pages/sign/sign.component';

const routes: Routes = [
  { path: '',component: DeskComponent },
  { path: 'detail',component: DetailComponent,data: {animationName: 'detail'} },
  { path: 'sign',component: SignComponent, data: {animationName: 'sign'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
