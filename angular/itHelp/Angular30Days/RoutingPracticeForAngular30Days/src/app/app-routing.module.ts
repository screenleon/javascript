import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {FeatureModule} from './feature/feature.module'

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';
import {EnsureLoginGuard} from './login/ensure-login.guard'

// /home, /about
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard]
  },
  {
    path: 'feature',
    loadChildren: () => FeatureModule
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
