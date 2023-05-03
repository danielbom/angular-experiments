import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundSliderExampleComponent } from './background-slider-example.component';

describe('BackgroundSliderExampleComponent', () => {
  let component: BackgroundSliderExampleComponent;
  let fixture: ComponentFixture<BackgroundSliderExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundSliderExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundSliderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
