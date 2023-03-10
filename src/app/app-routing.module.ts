import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule),  canActivate: [HomeGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [IntroGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule), 
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate: [LoginGuard]
  },
  {
    path: 'book-detail-modal',
    loadChildren: () => import('./book-detail-modal/book-detail-modal.module').then( m => m.BookDetailModalPageModule)
  },
  {
    path: 'author-modal',
    loadChildren: () => import('./author-modal/author-modal.module').then( m => m.AuthorModalPageModule)
  },
  {
    path: 'author-detail-modal',
    loadChildren: () => import('./author-detail-modal/author-detail-modal.module').then( m => m.AuthorDetailModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }