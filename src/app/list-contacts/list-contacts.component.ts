import { Component, OnInit } from '@angular/core';
import { IContact } from '../models/contact'


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  contactSelected: IContact;

  constructor() { }

  ngOnInit() {

  }

  setContact(contact: IContact){
    if(this.contactSelected != null){
      this.contactSelected.selected = false;
    }

    contact.selected = true;
    this.contactSelected = contact;
  }

}
