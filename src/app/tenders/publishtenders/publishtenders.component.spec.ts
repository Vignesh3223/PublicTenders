import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishtendersComponent } from './publishtenders.component';

describe('PublishtendersComponent', () => {
  let component: PublishtendersComponent;
  let fixture: ComponentFixture<PublishtendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishtendersComponent]
    });
    fixture = TestBed.createComponent(PublishtendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
