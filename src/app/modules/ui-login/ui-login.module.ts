import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Modules
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';
import { UiLoginRoutingModule } from '@modules/ui-login/ui-login-routing.module';

// App Components
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    UiLoginRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UiLoginModule { }
