import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getuid } from 'process';


@Injectable({ providedIn: 'root' })

export class AuthServiceTsService {

  constructor (private auth: Auth ) {}

  async register ({ email, password }) // si usams el registro, la promesa identificara "usr OR nul"
  { try {
      const user = await createUserWithEmailAndPassword
      ( this.auth, email, password );
          return user;
      }
    catch (e) {return null;}
  }

  async login ({ email, password }) 
  { try {
      const user = await signInWithEmailAndPassword
      ( this.auth, email, password );
          return user;
      }
  catch (e) {return null;}
}

  logout() { return signOut(this.auth);}

 
}


