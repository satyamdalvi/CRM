import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import data  from '../../assets/data/customerData.json';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private cookie: CookieService, private userService: UserService){}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    })
  }

  onSubmit(form: FormGroup) {
    if(form.valid){
      this.cookie.set('loggedIn', 'true')
      this.userService.customData = data
      this.router.navigate(['dashboard']);
    }
  }

}
