import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './revieww.model';
import { environment } from 'src/environments/environment';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Review[]>(`${this.apiBase}/review`);
  }

  getReviewsFromGame(name:string){
    return this.http.get<Review[]>(`${this.apiBase}/games/reviews/${name}`);
  }

  getReviewerName(reviewerId: number){
    return this.http.get<User>(`${this.apiBase}/users/idddd/${reviewerId}`);
  }

  create(revieww: Review) {
    return this.http.post(`${this.apiBase}/reviews`, revieww);
  }

  update(id:number, review: Review) {
    return this.http.put(`${this.apiBase}/reviews/${id}`, review);
  }

  delete(id:number) {
    return this.http.delete(`${this.apiBase}/review/${id}`);
  }

  getReviewbyid(reviewerId: number){
    return this.http.get<Review>(`${this.apiBase}/review/${reviewerId}`);
  }

  updatereviewer(reviewerId: number,user:User){
    return this.http.put(`${this.apiBase}/users/${reviewerId}`, user);
  }
}
