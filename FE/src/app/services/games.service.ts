import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  addToCart(payload) {
    return this.http.post(`${baseUrl}/cart`, payload);
  }

  getCartItems() {
    return this.http.get(`${baseUrl}/cart`);
  }

  increaseQty(payload) {
    return this.http.post(`${baseUrl}/cart`, payload);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
  public baseUrl = 'http://localhost:8080/api/images';
  public uploadImage(formData: FormData): Observable<any> {
    const file = formData.get('file') as File;
    const url = this.baseUrl + `/upload?file=${file.name}`;
    return this.http.post(url, formData , {responseType: 'text'});
  }


}
