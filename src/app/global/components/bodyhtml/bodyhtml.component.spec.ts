import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyhtmlComponent } from './bodyhtml.component';

describe('BodyhtmlComponent', () => {
  let component: BodyhtmlComponent;
  let fixture: ComponentFixture<BodyhtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyhtmlComponent]
    });
    fixture = TestBed.createComponent(BodyhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
