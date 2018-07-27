import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFAEnterCodePhoneTextComponent } from './mfaenter-code-phone-text.component';

describe('MFAEnterCodePhoneTextComponent', () => {
  let component: MFAEnterCodePhoneTextComponent;
  let fixture: ComponentFixture<MFAEnterCodePhoneTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFAEnterCodePhoneTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFAEnterCodePhoneTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
