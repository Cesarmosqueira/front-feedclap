import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  login(token : string, username : string) {
	// this.http.get(`${this.apiBase}/users/login?token=${token}&username=${username}`, 
	// 			  {observe: 'response'}).subscribe(response => {
	// 	console.log(response.status);
	// });
  }

}
