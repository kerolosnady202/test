
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http_client:HttpClient) {

  }
  getTrandingMovies():Observable<any>{
   return this.http_client.get('https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50')
  }
}
