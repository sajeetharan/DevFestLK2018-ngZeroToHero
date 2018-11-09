import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoombaComponent } from './goomba.component';

describe('GoombaComponent', () => {
  let component: GoombaComponent;
  let fixture: ComponentFixture<GoombaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoombaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
