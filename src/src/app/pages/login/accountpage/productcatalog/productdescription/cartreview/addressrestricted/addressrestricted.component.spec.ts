import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressrestrictedComponent } from './addressrestricted.component';

describe('AddressrestrictedComponent', () => {
  let component: AddressrestrictedComponent;
  let fixture: ComponentFixture<AddressrestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressrestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressrestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
