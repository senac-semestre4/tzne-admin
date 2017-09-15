import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

//import { MaterializeModule } from 'angular2-materialize';
//import { AlertModule } from 'ngx-bootstrap';
import { CountoModule }  from 'angular2-counto';
//import { ChartsModule } from 'ng2-charts';
//import { FlotModule } from 'ng2modules-flot';
//import { animateFactory } from 'ng2-animate';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CommonComponent } from './common/common.component';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { FooterComponent } from './common/footer/footer.component';
import { UserInfoComponent } from './common/user-info/user-info.component';
import { HeaderComponent } from './common/header/header.component';
import { Erro404Component } from './pages/erro-404/erro-404.component';
import { Erro500Component } from './pages/erro-500/erro-500.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PreloaderComponent } from './common/preloader/preloader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './dashboard/widget/widget.component';
import { LatestSalesComponent } from './dashboard/latest-sales/latest-sales.component';
import { ProductsStockLowComponent } from './dashboard/products-stock-low/products-stock-low.component';
import { SalesChartComponent } from './dashboard/sales-chart/sales-chart.component';
import { NotificationComponent } from './common/notification/notification.component';
import { ProductCalledComponent } from './catalog/product/product-called/product-called.component';
import { ProductMaintenanceComponent } from './catalog/product/product-maintenance/product-maintenance.component';
import { BrandCalledComponent } from './catalog/brand/brand-called/brand-called.component';
import { BrandMaintenanceComponent } from './catalog/brand/brand-maintenance/brand-maintenance.component';
import { CkeditorComponent } from './common/components/ckeditor/ckeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    MainMenuComponent,
    FooterComponent,
    UserInfoComponent,
    HeaderComponent,
    Erro404Component,
    Erro500Component,
    SignInComponent,
    ForgotPasswordComponent,
    PreloaderComponent,
    DashboardComponent,
    WidgetComponent,
    LatestSalesComponent,
    ProductsStockLowComponent,
    SalesChartComponent,
    NotificationComponent,
    ProductCalledComponent,
    ProductMaintenanceComponent,
    BrandCalledComponent,
    BrandMaintenanceComponent,
    CkeditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    //MaterializeModule,
    //AlertModule.forRoot(),
    CountoModule,
    //ChartsModule,
    //FlotModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
