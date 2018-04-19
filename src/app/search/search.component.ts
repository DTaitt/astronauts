import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http:Http) { }

  people:any;

  findAstronauts() {
    console.log('Finding astronauts...')
  }

  ngOnInit() {
    this.http.get("http://api.open-notify.org/astros.json")
    .toPromise()
    .then((res) => {
      this.people = res.json().people;
    })
  }

}
