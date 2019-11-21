import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRegisterRoutingModule } from './ui-register-routing.module';
import { RegisterFormComponent } from '@components/register-form/register-form.component';
import { UiToolbarModule } from '../ui-toolbar/ui-toolbar.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    UiToolbarModule,
    UiRegisterRoutingModule,
    MaterialModule
  ]
})
export class UiRegisterModule { }
