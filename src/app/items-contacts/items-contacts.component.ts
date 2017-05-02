import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { IContact } from '../models/contact'
import { ContactsService } from '../contacts.service'

@Component({
  selector: 'app-items-contacts',
  templateUrl: './items-contacts.component.html',
  styleUrls: ['./items-contacts.component.css']
})
export class ItemsContactsComponent implements OnInit {
  contacts: IContact[]
  @Output() changeContact = new EventEmitter<IContact>()
  errorMessage: any

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts()
                            .subscribe(
                                result => {
                                        this.contacts = result;

                                        console.log(this.contacts);
                                },
                                error => {
                                    this.errorMessage = <any>error;
                                      
                                    if(this.errorMessage !== null){
                                        console.log(this.errorMessage);
                                        alert("Error en la petición");
                                    }
                                })
  }

  clickContact(contact: IContact){
    this.changeContact.emit(contact);
  }

}
