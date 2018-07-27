import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogPopUpComponent } from './my-dialog-pop-up.component';

describe('MyDialogPopUpComponent', () => {
  let component: MyDialogPopUpComponent;
  let fixture: ComponentFixture<MyDialogPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
