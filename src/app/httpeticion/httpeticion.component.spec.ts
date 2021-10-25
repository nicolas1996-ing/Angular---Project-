import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpeticionComponent } from './httpeticion.component';

describe('HttpeticionComponent', () => {
  let component: HttpeticionComponent;
  let fixture: ComponentFixture<HttpeticionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpeticionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
