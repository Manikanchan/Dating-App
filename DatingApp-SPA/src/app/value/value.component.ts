import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

    getValues() {
      this.http.get('http://localhost:5001/api/values').subscribe(
        response => {
          this.values = response;
        }, error => {
          console.log(error);
        });
    }
  }
