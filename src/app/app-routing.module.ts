import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent, data: {title: 'Home'} },
  {path: 'about', component: AboutComponent, data: {title: 'About'} },
  {path: 'service', component: ServiceComponent, data: {title: 'Service'} },
  {path: 'portfolio', component: PortfolioComponent, data: {title: 'Portfolio'} },
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, PortfolioComponent]
