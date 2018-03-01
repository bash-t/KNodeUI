import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JalousieComponent } from './jalousie.component';

describe('JalousieComponent', () => {
  let component: JalousieComponent;
  let fixture: ComponentFixture<JalousieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JalousieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JalousieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
