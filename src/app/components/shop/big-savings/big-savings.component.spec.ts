import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSavingsComponent } from './big-savings.component';

describe('BigSavingsComponent', () => {
  let component: BigSavingsComponent;
  let fixture: ComponentFixture<BigSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSavingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
