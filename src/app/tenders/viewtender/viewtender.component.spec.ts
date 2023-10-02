import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtenderComponent } from './viewtender.component';

describe('ViewtenderComponent', () => {
  let component: ViewtenderComponent;
  let fixture: ComponentFixture<ViewtenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtenderComponent]
    });
    fixture = TestBed.createComponent(ViewtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
