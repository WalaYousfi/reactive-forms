import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidFormComponent } from './valid-form.component';

describe('ValidFormComponent', () => {
  let component: ValidFormComponent;
  let fixture: ComponentFixture<ValidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
