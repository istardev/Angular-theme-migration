import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from 'app/configs/routes.config';
import { HomeLayoutComponent } from '../home/home-layout/home.layout.component';

const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
  {
    path: routesNames.home,
    component: HomeLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
