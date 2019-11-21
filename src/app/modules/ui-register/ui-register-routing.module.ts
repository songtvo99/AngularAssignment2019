import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterContainerComponent } from '@components/router-container/router-container.component';
import { RegisterFormComponent } from '@components/register-form/register-form.component';


const routes: Routes = [
  {
    path: '',
    component: RouterContainerComponent,
    children: [
      {
        path: '', component: RegisterFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRegisterRoutingModule { }
