import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearhousesComponent } from './wearhouses.component';

describe('WearhousesComponent', () => {
  let component: WearhousesComponent;
  let fixture: ComponentFixture<WearhousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WearhousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WearhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
