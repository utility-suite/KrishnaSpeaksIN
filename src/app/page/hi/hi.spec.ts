import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hi } from './hi';

describe('Hi', () => {
  let component: Hi;
  let fixture: ComponentFixture<Hi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
