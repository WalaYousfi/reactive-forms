import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BasicFormComponent } from './basic-form/basic-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormField } from '@angular/material/input';

const components = [
  BasicFormComponent,
  NestedFormComponent,
  SubmitFormComponent,
  ValidFormComponent,
];
const modules = [
  CommonModule,
  MatButtonModule,
  MatSelectModule,
  MatInputModule,
  MatChipsModule,
  MatCheckboxModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MatFormField,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class FormsModule {}
