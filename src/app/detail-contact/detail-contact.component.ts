import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../models/contact'

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
  @Input() contact: IContact

  constructor() { }

  ngOnInit() {
  }

}
