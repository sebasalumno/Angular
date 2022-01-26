import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsbarComponent } from './inscriptionsbar.component';

describe('InscriptionsbarComponent', () => {
  let component: InscriptionsbarComponent;
  let fixture: ComponentFixture<InscriptionsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
