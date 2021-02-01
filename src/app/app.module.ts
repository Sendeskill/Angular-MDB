import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './layouts/about/about.component';
import { ModelComponent } from './layouts/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
