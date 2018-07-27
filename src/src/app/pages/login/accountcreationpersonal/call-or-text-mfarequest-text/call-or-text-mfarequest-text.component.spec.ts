import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOrTextMFARequestTextComponent } from './call-or-text-mfarequest-text.component';

describe('CallOrTextMFARequestTextComponent', () => {
  let component: CallOrTextMFARequestTextComponent;
  let fixture: ComponentFixture<CallOrTextMFARequestTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallOrTextMFARequestTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallOrTextMFARequestTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
