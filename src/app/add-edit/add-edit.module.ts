import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CustomerFormComponent
  }
]


@NgModule({
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddEditModule { }
