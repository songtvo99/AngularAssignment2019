import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiRegisterRoutingModule } from './ui-register-routing.module';
import { RegisterFormComponent } from '@components/register-form/register-form.component';
import { MaterialModule } from '@modules/material/material.module';
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    UiRegisterRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UiRegisterModule { }
