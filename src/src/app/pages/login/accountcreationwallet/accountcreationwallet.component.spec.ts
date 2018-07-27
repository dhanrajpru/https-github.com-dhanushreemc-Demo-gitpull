import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcreationwalletComponent } from './accountcreationwallet.component';

describe('AccountcreationwalletComponent', () => {
  let component: AccountcreationwalletComponent;
  let fixture: ComponentFixture<AccountcreationwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcreationwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcreationwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
