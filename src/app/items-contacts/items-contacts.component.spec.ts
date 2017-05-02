import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContactsComponent } from './items-contacts.component';

describe('ItemsContactsComponent', () => {
  let component: ItemsContactsComponent;
  let fixture: ComponentFixture<ItemsContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
