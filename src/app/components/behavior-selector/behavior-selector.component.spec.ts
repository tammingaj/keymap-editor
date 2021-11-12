import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSelectorComponent } from './behavior-selector.component';

describe('BehaviorSelectorComponent', () => {
  let component: BehaviorSelectorComponent;
  let fixture: ComponentFixture<BehaviorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
