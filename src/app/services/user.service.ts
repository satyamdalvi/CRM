import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {

    public customerData!:any

    set customData(data:any){
        this.customerData = data;
    }

    get customData(){
        return this.customerData;
    }

}