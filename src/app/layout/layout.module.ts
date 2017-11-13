import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NotificationComponent } from './notification/notification.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MainMenuComponent,
        NotificationComponent,
        PreloaderComponent,
        UserInfoComponent,
        FooterComponent
    ],
    imports: [ 
        CommonModule
    
    ],
    exports: [
        LayoutComponent,
    ],
    providers: [],
})
export class LayoutModule {}