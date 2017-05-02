import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../models/contact'

@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.css']
})
export class ItemContactComponent implements OnInit {
  @Input() contact: IContact
  

  constructor() { }

  ngOnInit() {
  }

}
