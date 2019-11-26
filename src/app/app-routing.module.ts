import { AuthGuard } from '@guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: 'src/app/modules/ui-login/ui-login.module#UiLoginModule'
  },
  {
    path: 'register',
    loadChildren:
      'src/app/modules/ui-register/ui-register.module#UiRegisterModule'
  },
  {
    path: 'cart',
    loadChildren: 'src/app/modules/cart/cart.module#CartModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'book-store',
    loadChildren: 'src/app/modules/book-store/book-store.module#BookStoreModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
