import { FormsModule } from '@angular/forms'; // <--  Ajouter la r�f�rence ici

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RouterModule, Routes } from '@angular/router';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';

const appRoutes: Routes = [
  { 
    path: 'meteo/:name',  // la page  affichant la m�t�o prendra comme param�tre 'name'
    component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les donn�es re�ues par openWeatherMap
  {
    path: '', // un chemin vide renverra vers '/'
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
