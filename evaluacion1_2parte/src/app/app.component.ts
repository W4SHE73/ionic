import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'mail' },
    { title: 'Informacion', url: '/folder/Outbox', icon: 'home' },
    { title: 'Divisas', url: '/folder/Favorites', icon: 'wallet' },
    { title: 'El Tiempo', url: 'eltiempo', icon: 'cloudy-night' },
    { title: 'Noticias', url: 'noticias', icon: 'newspaper' },
  ];
  public labels = [];
  constructor() {}
}
