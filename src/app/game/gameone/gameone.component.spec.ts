import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoneComponent } from './gameone.component';

describe('GameoneComponent', () => {
  let component: GameoneComponent;
  let fixture: ComponentFixture<GameoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
