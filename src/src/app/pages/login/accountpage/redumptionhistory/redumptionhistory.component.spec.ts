import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedumptionhistoryComponent } from './redumptionhistory.component';

describe('RedumptionhistoryComponent', () => {
  let component: RedumptionhistoryComponent;
  let fixture: ComponentFixture<RedumptionhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedumptionhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedumptionhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
