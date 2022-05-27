import { MessageService } from '../../core/services/message/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public message:string='';

  constructor(private messageService:MessageService) { }


  ngOnInit(): void {
  
  this.message=this.messageService.getMessage();
  }

}
