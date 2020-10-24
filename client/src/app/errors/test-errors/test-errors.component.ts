import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  get404(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
      console.log(response);
    },error => {
      console.error(error);
    })
  }

  get401(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
      console.log(response);
    },error => {
      console.error(error);
    })
  }

  get500(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
      console.log(response);
    },error => {
      console.error(error);
    })
  }

  get400(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
      console.log(response);
    },error => {
      console.error(error);
    })
  }

  getValidationError(){
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(response => {
      console.log(response);
    },error => {
      console.error(error);
    })
  }
}
