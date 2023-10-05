import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqoutationsComponent } from './viewqoutations.component';

describe('ViewqoutationsComponent', () => {
  let component: ViewqoutationsComponent;
  let fixture: ComponentFixture<ViewqoutationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewqoutationsComponent]
    });
    fixture = TestBed.createComponent(ViewqoutationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
