import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private apiBase: string = environment.apiBase;
	
	constructor(private http:HttpClient) {
	}

	login(token : string, username : string) {
		return this.http.get<boolean>(`${this.apiBase}/users/login?token=${token}&username=${username}`);
	}
}
