import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFAEnterCodeEmailComponent } from './mfaenter-code-email.component';

describe('MFAEnterCodeEmailComponent', () => {
  let component: MFAEnterCodeEmailComponent;
  let fixture: ComponentFixture<MFAEnterCodeEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFAEnterCodeEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFAEnterCodeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
