import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInvestorComponent } from './select-investor.component';

describe('SelectInvestorComponent', () => {
  let component: SelectInvestorComponent;
  let fixture: ComponentFixture<SelectInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectInvestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
