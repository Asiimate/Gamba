import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGamesComponent } from './check-games.component';

describe('CheckGamesComponent', () => {
  let component: CheckGamesComponent;
  let fixture: ComponentFixture<CheckGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
