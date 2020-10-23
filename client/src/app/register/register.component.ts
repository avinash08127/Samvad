import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistrationMode = new EventEmitter();
  model: any = {};

  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }
  register(){
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    });
  }

  cancel(){
    this.cancelRegistrationMode.emit(false);
  }

}
