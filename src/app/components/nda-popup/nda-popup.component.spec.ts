import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdaPopupComponent } from './nda-popup.component';

describe('NdaPopupComponent', () => {
  let component: NdaPopupComponent;
  let fixture: ComponentFixture<NdaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdaPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
