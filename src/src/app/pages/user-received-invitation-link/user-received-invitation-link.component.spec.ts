import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReceivedInvitationLinkComponent } from './user-received-invitation-link.component';

describe('UserReceivedInvitationLinkComponent', () => {
  let component: UserReceivedInvitationLinkComponent;
  let fixture: ComponentFixture<UserReceivedInvitationLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReceivedInvitationLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReceivedInvitationLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
