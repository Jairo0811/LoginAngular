import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucriptorComponent } from './sucriptor.component';

describe('SucriptorComponent', () => {
  let component: SucriptorComponent;
  let fixture: ComponentFixture<SucriptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
