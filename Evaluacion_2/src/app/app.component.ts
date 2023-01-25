import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Informacion', url: 'informacion', icon: 'finger-print' },
    { title: 'Divisas', url: 'divisas', icon: 'wallet' },
    { title: 'El Tiempo', url: 'eltiempo', icon: 'cloudy-night' },
    { title: 'Noticias', url: 'noticias', icon: 'newspaper' },
    { title: 'Malware', url: 'malware', icon: 'bug' },
    { title: 'Iniciar Sesion', url: 'login', icon: 'person-add' },
    { title: 'Cerrar Sesion', url: 'desboard', icon: 'walk' },
  ];
  public labels = [];
  constructor() {}
}
