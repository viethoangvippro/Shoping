import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/cart';
  constructor(private http: HttpClient) { }
  addToCart(product : any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }
}
