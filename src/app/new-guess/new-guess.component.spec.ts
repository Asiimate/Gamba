import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuessComponent } from './new-guess.component';

describe('NewGuessComponent', () => {
  let component: NewGuessComponent;
  let fixture: ComponentFixture<NewGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGuessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
