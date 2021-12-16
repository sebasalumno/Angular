import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilbarComponent } from './perfilbar.component';

describe('PerfilbarComponent', () => {
  let component: PerfilbarComponent;
  let fixture: ComponentFixture<PerfilbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
