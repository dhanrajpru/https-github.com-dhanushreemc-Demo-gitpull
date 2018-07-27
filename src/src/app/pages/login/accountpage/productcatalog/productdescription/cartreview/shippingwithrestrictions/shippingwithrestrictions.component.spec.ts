import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingwithrestrictionsComponent } from './shippingwithrestrictions.component';

describe('ShippingwithrestrictionsComponent', () => {
  let component: ShippingwithrestrictionsComponent;
  let fixture: ComponentFixture<ShippingwithrestrictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingwithrestrictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingwithrestrictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
