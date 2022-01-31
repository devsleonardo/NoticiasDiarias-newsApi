import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMundoComponent } from './top-mundo.component';

describe('TopMundoComponent', () => {
  let component: TopMundoComponent;
  let fixture: ComponentFixture<TopMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
