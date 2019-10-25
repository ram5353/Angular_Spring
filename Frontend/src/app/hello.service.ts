import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Asset} from './asset';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getData(id): Observable<Asset> {

    return this.http.get<Asset>('http://localhost:8080/display/' + id);
  }
}

