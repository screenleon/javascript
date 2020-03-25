import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../service/api.service';

import { map, switchMap } from 'rxjs/operators';
import { Author } from '../models/author.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public author$ = this.route.data.pipe(map((res: any) => res.profile));

  constructor(private route: ActivatedRoute, private service: ApiService) {
    console.log(this.route.snapshot.data)
    // this.route.data.subscribe({
    //   next: value => this.author = value.profile
    // });

    // this.route.paramMap.pipe(
    //   map(params => params.get('username')),
    //   switchMap(username => service.getProfile(username))
    // ).subscribe({
    //   next: value => console.log(value)
    // });
  }

  ngOnInit(): void {
  }

}
