import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, ) { }
  // http Client wird erst geladen, wenn wir ihn brauchen

  public currentUser: string;
  public currentToken: string;

  public loginWithUserAndPassword(username:string, password:string) {
    const url = environment.baseURL + '';
    // URL des Backends
    const body = {
      'username': username,
      'password': password
    }
    return lastValueFrom(this.http.post(url, body));
    // lastValueFrom wandelt es in Promise um
  }


  public register(username:string, password:string, email:string) {
    const url = environment.baseURL + '/register/';
    const body = {
      'username': username,
      'password': password,
      'email': email
    }
    return lastValueFrom(this.http.post(url, body));
  }

  
  public activateAccount(decoded_pk) {
    const url = environment.baseURL+ '/account_activation/';
    const body = {
      'decoded_pk': decoded_pk,
    }
    return lastValueFrom(this.http.patch(url, body));
  }

  public forgottenPassword(email:string) {
    const url = environment.baseURL + '/forgotten_password/';
    const body = {
      'email': email
    }
    return lastValueFrom(this.http.post(url, body));
  }

  public passwordReset(decoded_pk, new_password) {
    const url = environment.baseURL+ '/reset_password/';
    const body = {
      'decoded_pk': decoded_pk,
      'new_password': new_password
    }
    return lastValueFrom(this.http.patch(url, body));
  }


  public logout(userId) {
    const url = `${environment.baseURL}/logout/${userId}/`;
    return lastValueFrom(this.http.delete(url));
  }
}
