import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TrialComponent } from './trial/trial.component';
import { MatInputModule } from '@angular/material/input';

import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


import { FormsModule } from './forms/forms.module';

@NgModule({
  declarations: [TrialComponent],
  imports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
