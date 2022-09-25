import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameheaderComponent } from './gameheader.component';

describe('GameheaderComponent', () => {
  let component: GameheaderComponent;
  let fixture: ComponentFixture<GameheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
