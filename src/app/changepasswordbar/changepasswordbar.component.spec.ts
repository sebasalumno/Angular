import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordbarComponent } from './changepasswordbar.component';

describe('ChangepasswordbarComponent', () => {
  let component: ChangepasswordbarComponent;
  let fixture: ComponentFixture<ChangepasswordbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepasswordbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
