import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametwoComponent } from './gametwo.component';

describe('GametwoComponent', () => {
  let component: GametwoComponent;
  let fixture: ComponentFixture<GametwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GametwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
