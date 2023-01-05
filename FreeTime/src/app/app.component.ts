import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Register', url: 'register', icon: 'clipboard' },
    { title: 'API', url: 'api', icon: 'bug' },
    { title: 'Conocenos', url: 'conocenos', icon: 'code-slash' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
