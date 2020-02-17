import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesConfig } from '../configs/routes.config';
import { WebLayoutComponent } from '../theme/layout/web-layout/web-layout.component';
import { menus } from './home/config/menu';
import { LayoutOutType } from '@shared/interfaces/navConfig';

const routesNames = RoutesConfig.routesNames;

const routes: Routes = [
  {
    path: routesNames.home,
    component: WebLayoutComponent,
    loadChildren: () => import('@routes/home/home.module').then(mod => mod.HomeModule),
    data: { type: LayoutOutType.WEB, menus: menus, showSideNav: true },
  },
  { path: routesNames.star, redirectTo: routesNames.home },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
