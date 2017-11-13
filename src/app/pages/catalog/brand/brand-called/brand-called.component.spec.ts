import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCalledComponent } from './brand-called.component';

describe('BrandCalledComponent', () => {
  let component: BrandCalledComponent;
  let fixture: ComponentFixture<BrandCalledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandCalledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
