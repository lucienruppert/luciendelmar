import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresssionTherapyComponent } from './regresssion-therapy.component';

describe('RegresssionTherapyComponent', () => {
  let component: RegresssionTherapyComponent;
  let fixture: ComponentFixture<RegresssionTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegresssionTherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegresssionTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
