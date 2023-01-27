import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
   // { title: 'Perfil', url: 'profile', icon: 'finger-print' },
    { title: 'Informacion', url: 'informacion', icon: 'finger-print' },
    { title: 'Divisas', url: 'divisas', icon: 'wallet' },
    { title: 'El Tiempo', url: 'eltiempo', icon: 'cloudy-night' },
    { title: 'Noticias', url: 'noticias', icon: 'newspaper' },
    { title: 'Malware', url: 'malware', icon: 'bug' },
    { title: 'Iniciar Sesion', url: 'login', icon: 'person-add' },
  ];
  public labels = [];
  constructor() {}
}
