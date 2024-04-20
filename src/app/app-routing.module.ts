import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { WebDesignsComponent } from './web-designs/web-designs.component';
import { GraphicDesignsComponent } from './graphic-designs/graphic-designs.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'illustrations', component: IllustrationsComponent },
  { path: 'webDesing', component: WebDesignsComponent },
  {path:'graphicDesigns', component:GraphicDesignsComponent}
];
const routerOptions: ExtraOptions={
  scrollPositionRestoration: 'enabled',
  anchorScrolling:'enabled',

}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes,routerOptions) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
