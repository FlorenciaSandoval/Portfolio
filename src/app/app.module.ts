import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { GraphicDesignsComponent } from './graphic-designs/graphic-designs.component';
import { WebDesignsComponent } from './web-designs/web-designs.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    IllustrationsComponent,
    GraphicDesignsComponent,
    WebDesignsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
