import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoFrontComponent } from './compo-front.component';

describe('CompoFrontComponent', () => {
  let component: CompoFrontComponent;
  let fixture: ComponentFixture<CompoFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
