import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VooComponent } from './voo.component';

describe('VooComponent', () => {
  let component: VooComponent;
  let fixture: ComponentFixture<VooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VooComponent]
    });
    fixture = TestBed.createComponent(VooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
