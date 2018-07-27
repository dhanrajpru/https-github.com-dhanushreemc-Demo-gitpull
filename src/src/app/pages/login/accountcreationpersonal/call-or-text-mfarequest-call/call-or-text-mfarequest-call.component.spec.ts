import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOrTextMFARequestCallComponent } from './call-or-text-mfarequest-call.component';

describe('CallOrTextMFARequestCallComponent', () => {
  let component: CallOrTextMFARequestCallComponent;
  let fixture: ComponentFixture<CallOrTextMFARequestCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOrTextMFARequestCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOrTextMFARequestCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
