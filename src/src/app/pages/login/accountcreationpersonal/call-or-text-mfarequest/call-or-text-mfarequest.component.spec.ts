import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOrTextMFARequestComponent } from './call-or-text-mfarequest.component';

describe('CallOrTextMFARequestComponent', () => {
  let component: CallOrTextMFARequestComponent;
  let fixture: ComponentFixture<CallOrTextMFARequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOrTextMFARequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOrTextMFARequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
