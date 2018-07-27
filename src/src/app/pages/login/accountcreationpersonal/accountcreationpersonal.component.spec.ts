import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountcreationpersonalComponent } from './accountcreationpersonal.component';

describe('AccountcreationpersonalComponent', () => {
  let component: AccountcreationpersonalComponent;
  let fixture: ComponentFixture<AccountcreationpersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcreationpersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcreationpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
