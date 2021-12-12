import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboViewComponent } from './combo-view.component';

describe('ComboViewComponent', () => {
  let component: ComboViewComponent;
  let fixture: ComponentFixture<ComboViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
