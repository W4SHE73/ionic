import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';
import { AvatarService } from 'src/app/services/avatar.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage  {
  profile = null;

  constructor(
    private AuthServiceTsServic: AuthServiceTsService,
    private router: Router,
  ) {
    
   }

  async logout() {
		await this.AuthServiceTsServic.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}
}
