import { Injectable } from '@angular/core'
import { IContact } from './models/contact'

import {Http, Response, Headers} from "@angular/http"
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable"

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  getContacts(){
    return this.http.get("https://s3.amazonaws.com/technical-challenge/Contacts_v2.json")
                            .map(res => res.json());
  }
}
