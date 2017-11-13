import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules externos
import { CountoModule } from 'angular2-counto';
import { CKEditorModule } from 'ng2-ckeditor';

//pages
import { BrandCalledComponent } from './catalog/brand/brand-called/brand-called.component';
import { BrandMaintenanceComponent } from './catalog/brand/brand-maintenance/brand-maintenance.component';
import { ProductCalledComponent } from './catalog/product/product-called/product-called.component';
import { ProductMaintenanceComponent } from './catalog/product/product-maintenance/product-maintenance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Erro404Component } from './erro-404/erro-404.component';
import { Erro500Component } from './erro-500/erro-500.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';

// component
import { LatestSalesComponent } from './dashboard/latest-sales/latest-sales.component';
import { ProductsStockLowComponent } from './dashboard/products-stock-low/products-stock-low.component';
import { SalesChartComponent } from './dashboard/sales-chart/sales-chart.component';
import { WidgetComponent } from './dashboard/widget/widget.component';


@NgModule({
    declarations: [
        BrandCalledComponent,
        BrandMaintenanceComponent,
        ProductCalledComponent,
        ProductMaintenanceComponent,
        DashboardComponent,
        Erro404Component,
        Erro500Component,
        ForgotPasswordComponent,
        SignInComponent,
        LatestSalesComponent,
        ProductsStockLowComponent,
        SalesChartComponent,
        WidgetComponent,
    ],
    imports: [ 
        CommonModule,
        CountoModule
    ],
    exports: [
        BrandCalledComponent,
        BrandMaintenanceComponent,
        ProductCalledComponent,
        ProductMaintenanceComponent,
        DashboardComponent,
        Erro404Component,
        Erro500Component,
        ForgotPasswordComponent,
        SignInComponent
    ],
    providers: [],
})
export class PagesModule {}