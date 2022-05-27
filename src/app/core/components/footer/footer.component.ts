import { Component, OnInit } from '@angular/core';
import { networks } from './footer-list.config';
import { Isocial } from './models/footer-models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
public socialNetworks:Isocial[]=networks as Isocial[];


  constructor() { }

  ngOnInit(): void {
  }

}
