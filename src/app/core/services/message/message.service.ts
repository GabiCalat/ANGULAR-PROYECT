import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public message?:string;

  constructor(private router:Router) { }

  public getMessage():string{

    return this.message || '';
  }

  public setMessage(message:string){
    this.message=message;
  }
}
