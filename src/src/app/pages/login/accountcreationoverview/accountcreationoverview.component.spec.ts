import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcreationoverviewComponent } from './accountcreationoverview.component';

describe('AccountcreationoverviewComponent', () => {
  let component: AccountcreationoverviewComponent;
  let fixture: ComponentFixture<AccountcreationoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcreationoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcreationoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
