import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from '@app/components/login-form/login-form.component';
import { RouterContainerComponent } from '@app/components/router-container/router-container.component';

const routes: Routes = [
  {
    path: '',
    component: RouterContainerComponent,
    children:
      [
        { path: '', component: LoginFormComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiLoginRoutingModule { }
