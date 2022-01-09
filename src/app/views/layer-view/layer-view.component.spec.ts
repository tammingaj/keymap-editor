import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerViewComponent } from './layer-view.component';

describe('LayerViewComponent', () => {
  let component: LayerViewComponent;
  let fixture: ComponentFixture<LayerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
