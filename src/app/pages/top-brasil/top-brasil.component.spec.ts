import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrasilComponent } from './top-brasil.component';

describe('TopBrasilComponent', () => {
  let component: TopBrasilComponent;
  let fixture: ComponentFixture<TopBrasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBrasilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
