import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PSearchComponent } from './p.search/p.search.component';
import { ResultsComponent } from './results/results.component';
import { DialogComponent } from './dialog/dialog.component'
import { AnswersComponent } from './answers/answers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import {MaterialModule} from './material-modules';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FetchData} from './query.service';

@NgModule({
  declarations: [
    AppComponent,
    PSearchComponent,
    ResultsComponent,
    DialogComponent,
    AnswersComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchData],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule { }