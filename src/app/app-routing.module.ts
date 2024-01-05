import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { configResolver } from './shared/resolvers/config.resolver';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  resolve: { config: configResolver }
},
{
  path: 'register',
  loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  resolve: { config: configResolver }

},
{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  resolve: { config: configResolver }
},
{
  path: 'reset-password',
  loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule),
  resolve: { config: configResolver }
},
{
  path: '', redirectTo: '/login', pathMatch: 'full'
},
{
  path: '**', pathMatch: 'full',
  redirectTo: 'login'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
