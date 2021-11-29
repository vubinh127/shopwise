import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id : number = 0;
  constructor(private routes: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params.id;
    //Xử lí khi thay đôi URL
    this.router.events.forEach(evt => {
      if ( evt instanceof NavigationEnd ){
        this.id = this.routes.snapshot.params.id;
      }
  })
}
}