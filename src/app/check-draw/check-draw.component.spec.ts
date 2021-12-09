import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDrawComponent } from './check-draw.component';

describe('CheckDrawComponent', () => {
  let component: CheckDrawComponent;
  let fixture: ComponentFixture<CheckDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
