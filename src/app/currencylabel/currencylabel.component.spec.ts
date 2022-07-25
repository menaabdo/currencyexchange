import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencylabelComponent } from './currencylabel.component';

describe('CurrencylabelComponent', () => {
  let component: CurrencylabelComponent;
  let fixture: ComponentFixture<CurrencylabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencylabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencylabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
