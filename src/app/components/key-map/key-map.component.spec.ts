import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyMapComponent } from './key-map.component';

describe('KeyMapComponent', () => {
  let component: KeyMapComponent;
  let fixture: ComponentFixture<KeyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
