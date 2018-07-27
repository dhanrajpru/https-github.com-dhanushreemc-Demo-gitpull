import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFAEnterCodePhoneCallComponent } from './mfaenter-code-phone-call.component';

describe('MFAEnterCodePhoneCallComponent', () => {
  let component: MFAEnterCodePhoneCallComponent;
  let fixture: ComponentFixture<MFAEnterCodePhoneCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFAEnterCodePhoneCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFAEnterCodePhoneCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
