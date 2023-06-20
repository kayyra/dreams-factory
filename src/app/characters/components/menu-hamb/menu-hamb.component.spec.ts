import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHambComponent } from './menu-hamb.component';

describe('MenuHambComponent', () => {
  let component: MenuHambComponent;
  let fixture: ComponentFixture<MenuHambComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHambComponent]
    });
    fixture = TestBed.createComponent(MenuHambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
