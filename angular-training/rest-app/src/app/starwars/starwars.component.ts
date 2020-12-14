import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import { Ipost } from '../model/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  data: Ipost[];

  constructor(private _postService: PostsService) { }

  ngOnInit() {
    this._postService.getPosts().subscribe(p => this.data = p);
  }

}
