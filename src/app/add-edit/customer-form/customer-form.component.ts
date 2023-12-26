import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit{
  customerForm!: FormGroup
  urlData:any;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private userService: UserService, private router: Router){

  }

  ngOnInit(): void {

    const pattern =  "^[0-9_-]{10}";
    this.customerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(pattern)]]
    })

    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.urlData = params
      if(params.type === 'create'){
      }else if(params.type === 'edit'){
        this.customerForm.patchValue({
          firstname: params.firstname,
          lastname: params.lastname,
          email: params.email,
          phonenumber: params.phonenumber
        })
      }
    })
    
  }

  onSubmit(customerForm:any){
    if(customerForm.valid){
      const data = this.userService.customData
      if(this.urlData.type === 'create'){
        data.unshift({
          email: customerForm.value.email,
          firstname: customerForm.value.firstname,
          lastname: customerForm.value.lastname,
          phonenumber: customerForm.value.phonenumber
        })
        this.userService.customData = data;
        this.router.navigate(['dashboard'])
      }else if(this.urlData.type === 'edit'){
        const newArray = data.map((item:any) => item.email === customerForm.value.email?{email: customerForm.value.email,
          firstname: customerForm.value.firstname,
          lastname: customerForm.value.lastname,
          phonenumber: customerForm.value.phonenumber}:item)
        this.userService.customData = newArray;
        this.router.navigate(['dashboard'])
      }
    }
  }

  navigateToDashboard(){
    this.router.navigate(['dashboard'])
  }

}
