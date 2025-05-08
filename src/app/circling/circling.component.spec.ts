import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclingComponent } from './circling.component';

describe('CirclingComponent', () => {
  let component: CirclingComponent;
  let fixture: ComponentFixture<CirclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirclingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CirclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
