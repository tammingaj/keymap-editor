import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycodeSelectorComponent } from './keycode-selector.component';

describe('KeycodeSelectorComponent', () => {
  let component: KeycodeSelectorComponent;
  let fixture: ComponentFixture<KeycodeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycodeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeycodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
