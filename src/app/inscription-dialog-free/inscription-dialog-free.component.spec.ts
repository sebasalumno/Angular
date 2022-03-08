import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionDialogFreeComponent } from './inscription-dialog-free.component';

describe('InscriptionDialogFreeComponent', () => {
  let component: InscriptionDialogFreeComponent;
  let fixture: ComponentFixture<InscriptionDialogFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionDialogFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionDialogFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
