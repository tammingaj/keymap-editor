import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorViewComponent } from './behavior-view.component';

describe('BehaviorViewComponent', () => {
  let component: BehaviorViewComponent;
  let fixture: ComponentFixture<BehaviorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
