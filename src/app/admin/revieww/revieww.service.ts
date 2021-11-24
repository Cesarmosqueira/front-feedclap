import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './revieww.model';
import { environment } from 'src/environments/environment';
import {User} from 'src/app/auth/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiBase: string = environment.apiBase;

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Review[]>(`${this.apiBase}/reviews`);
  }

  getReviewsFromGame(name:string){
    return this.http.get<Review[]>(`${this.apiBase}/games/reviews/${name}`);
  }

  getReviewerName(reviewerId: number){
    return this.http.get<User>(`${this.apiBase}/review/reviewer/${reviewerId}`);
  }

  create(revieww: Review) {
    return this.http.post(`${this.apiBase}/reviews`, revieww);
  }

  update(id:number, review: Review) {
    return this.http.put(`${this.apiBase}/reviews/${id}`, review);
  }

  delete(id:number) {
    return this.http.delete(`${this.apiBase}/reviews/${id}`);
  }
}
