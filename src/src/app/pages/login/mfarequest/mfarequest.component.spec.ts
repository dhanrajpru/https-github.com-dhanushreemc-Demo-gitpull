import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFARequestComponent } from './mfarequest.component';

describe('MFARequestComponent', () => {
  let component: MFARequestComponent;
  let fixture: ComponentFixture<MFARequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFARequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFARequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
