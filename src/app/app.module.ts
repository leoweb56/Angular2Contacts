import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsService } from './contacts.service';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ItemContactComponent } from './item-contact/item-contact.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';
import { ItemsContactsComponent } from './items-contacts/items-contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ItemContactComponent,
    DetailContactComponent,
    ItemsContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
