import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerBlindComponent } from './roller-blind.component';

describe('RollerBlindComponent', () => {
  let component: RollerBlindComponent;
  let fixture: ComponentFixture<RollerBlindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerBlindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerBlindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
