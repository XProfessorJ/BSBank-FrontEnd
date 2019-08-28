import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginNavTitleComponent } from './login/login-nav-title/login-nav-title.component';
import { LoginSigninComponentComponent } from './login/login-signin-component/login-signin-component.component';
import { BlocksNavComponent } from './login/blocks-nav/blocks-nav.component';
import { FindMoreInfomationComponent } from './login/find-more-infomation/find-more-infomation.component';
import { BottomNavComponent } from './login/bottom-nav/bottom-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardTableComponent } from './dashboard/card-table/card-table.component';
import { CardDisplayNumberFormat } from './component/cardDisplayNumber';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginNavTitleComponent,
    LoginSigninComponentComponent,
    BlocksNavComponent,
    FindMoreInfomationComponent,
    BottomNavComponent,
    DashboardComponent,
    CardTableComponent,
    CardDisplayNumberFormat
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
