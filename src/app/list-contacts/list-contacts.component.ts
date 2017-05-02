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

  changeContact(contact: IContact){
    this.contactSelected = contact;
  }

  setContact(contact: IContact){
    this.contactSelected = contact;
  }

}
