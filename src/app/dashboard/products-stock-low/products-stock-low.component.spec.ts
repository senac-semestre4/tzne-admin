import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsStockLowComponent } from './products-stock-low.component';

describe('ProductsStockLowComponent', () => {
  let component: ProductsStockLowComponent;
  let fixture: ComponentFixture<ProductsStockLowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsStockLowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsStockLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
