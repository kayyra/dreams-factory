import { Injectable } from '@angular/core';
import { Characters } from '../models/Characters.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) { }
  getAll() :Observable<Characters[]>{
    return this.http.get<Characters[]>(`${environment.API_URL}`)
  }
}
