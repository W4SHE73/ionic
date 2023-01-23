import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  slides = [
    {
      img: 'assets/img/4D4.jpg',
      titulo: '3er Lugar en el 4D4 Challenge v4'
    },

    {
      img: 'assets/img/duocCTF.jpg',
      titulo: '1er Lugar Nacional en Ciberseguridad DUOC UC 2022'
    },

    {
      img: 'assets/img/usachbadge.png',
      titulo: 'Ultimo curso aprobado'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
