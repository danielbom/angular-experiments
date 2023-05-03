import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSliderComponent } from './background-slider.component';

describe('BackgroundSliderComponent', () => {
  let component: BackgroundSliderComponent;
  let fixture: ComponentFixture<BackgroundSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
