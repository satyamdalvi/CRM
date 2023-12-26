import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  current_page:any = 1;
  customerData:any
  deleteData: any;
  searchText = '';
  @ViewChild('closebutton') closebutton: any;

  constructor(private router: Router, private userService: UserService){}

  ngOnInit(): void {
    this.customer_data();
  }

  customer_data(){
    this.customerData = this.userService.customData
    console.log('customerData =>', this.customerData);
  }

  search(event:any){
    // console.log('event =>', event);
    console.log('event.target.value =>', event.target.value);
    this.customerData = event.target.value === ""?this.customerData:this.customerData.filter((element:any)=>{
      return element.firstname.toLowerCase() === event.target.value.toLowerCase()
    })
    console.log('this.customerData =>', this.customerData);
  }

  customerNavigate(type:any, data:any){
    if(type === 'create'){
      this.router.navigate(['customer'], {
        queryParams: {
          type: 'create'
        }
      })
    }
    else if(type === 'edit'){
      this.router.navigate(['customer'], {
        queryParams: {
          type: 'edit',
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phonenumber: data.phonenumber
        }
      })
    }

  }

  deleteCustomer(data:any){
    const existingCustomerData = this.userService.customData
    console.log('existingCustomData =>', existingCustomerData);
    console.log('data =>', data);
    const updatedCustomerData:any = []
    existingCustomerData.map((item:any)=>{
      console.log('item =>', item);
      if(item.email !== data.email){
        console.log('item 2 =>', item);
        updatedCustomerData.push(item);
      }
    })
    console.log("updatedCustomerData =====>",updatedCustomerData);
    this.closebutton.nativeElement.click();
    this.userService.customData = updatedCustomerData
    this.customer_data()
  }

  shareDataToModal(data:any){
    this.deleteData = data
    console.log('this.deleteData =>', this.deleteData);
  }

}
