import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderstakenComponent } from './tenderstaken.component';

describe('TenderstakenComponent', () => {
  let component: TenderstakenComponent;
  let fixture: ComponentFixture<TenderstakenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenderstakenComponent]
    });
    fixture = TestBed.createComponent(TenderstakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
