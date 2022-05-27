import { Isocial } from './../../models/footer-models';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrls: ['./footer-link.component.scss']
})
export class FooterLinkComponent implements OnInit {

  @Input() public socialNetwork?:Isocial;
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
