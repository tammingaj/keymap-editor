import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboFormComponent } from './combo-form.component';

describe('ComboFormComponent', () => {
  let component: ComboFormComponent;
  let fixture: ComponentFixture<ComboFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
