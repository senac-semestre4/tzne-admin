import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalledComponent } from './product-called.component';

describe('ProductCalledComponent', () => {
  let component: ProductCalledComponent;
  let fixture: ComponentFixture<ProductCalledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCalledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
