import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {

    personajeId! : string | null;
    character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http:HttpClient
  ) { }
  ngOnInit() {
    
    this.personajeId = this.activatedRoute.snapshot.paramMap.get('id') 
    this.http.get('https://rickandmortyapi.com/api/character/' + this.personajeId)
    .subscribe(res => this.character = res );
  }

}
