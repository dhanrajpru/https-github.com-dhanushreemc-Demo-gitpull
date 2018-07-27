import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallortextmfarequestemailComponent } from './callortextmfarequestemail.component';

describe('CallortextmfarequestemailComponent', () => {
  let component: CallortextmfarequestemailComponent;
  let fixture: ComponentFixture<CallortextmfarequestemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallortextmfarequestemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallortextmfarequestemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
