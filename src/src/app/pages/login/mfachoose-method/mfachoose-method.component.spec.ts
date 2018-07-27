import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MFAChooseMethodComponent } from './mfachoose-method.component';

describe('MFAChooseMethodComponent', () => {
  let component: MFAChooseMethodComponent;
  let fixture: ComponentFixture<MFAChooseMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MFAChooseMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MFAChooseMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
