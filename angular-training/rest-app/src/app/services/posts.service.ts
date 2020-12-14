import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ipost } from '../model/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private _httpClient: HttpClient) { }


  getPosts(): Observable<Ipost[]> {
    return this._httpClient.get<Ipost>(this.url);
  }


}
