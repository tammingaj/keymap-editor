import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKeymapModalComponent } from './new-keymap-modal.component';

describe('NewKeymapModalComponent', () => {
  let component: NewKeymapModalComponent;
  let fixture: ComponentFixture<NewKeymapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewKeymapModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKeymapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
